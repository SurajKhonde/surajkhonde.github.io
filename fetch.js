const fs = require("fs/promises");
const path = require("path");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA === "true";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const OUT_DIR = path.resolve(__dirname, "..", "public");

const ERR = {
  noUserName:
    "GITHUB_USERNAME is undefined. Please set it in your .env file.",
  noToken:
    "REACT_APP_GITHUB_TOKEN is undefined. Please set it in your .env file.",
  requestFailed:
    "GitHub request failed. Check token/username or rate limits.",
  requestFailedMedium:
    "Medium request failed. Check MEDIUM_USERNAME or rss2json availability."
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function safeWriteJson(filePath, jsonString) {
  // Validate JSON before writing
  JSON.parse(jsonString);
  await fs.writeFile(filePath, jsonString, "utf8");
}

async function fetchGitHubProfile() {
  if (!GITHUB_USERNAME) throw new Error(ERR.noUserName);
  if (!GITHUB_TOKEN) throw new Error(ERR.noToken);

  console.log(`Fetching GitHub profile data for ${GITHUB_USERNAME}`);

  const query = `
    query ($login: String!) {
      user(login: $login) {
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers { totalCount }
                url
                id
                diskUsage
                primaryLanguage { name color }
              }
            }
          }
        }
      }
    }
  `;

  const body = JSON.stringify({
    query,
    variables: { login: GITHUB_USERNAME }
  });

  // Basic retry for transient failures / rate limiting
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetchWithTimeout("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body
    });

    const text = await res.text();

    // GitHub can return 200 but still have GraphQL errors
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error(`${ERR.requestFailed}\nInvalid JSON response from GitHub.`);
    }

    // Rate limit / transient
    if (!res.ok) {
      const msg = parsed?.message || `HTTP ${res.status}`;
      if ((res.status === 429 || res.status === 502 || res.status === 503) && attempt < 3) {
        await sleep(800 * attempt);
        continue;
      }
      throw new Error(`${ERR.requestFailed}\n${msg}`);
    }

    if (parsed?.errors?.length) {
      const errMsg = parsed.errors.map((e) => e.message).join(" | ");
      throw new Error(`${ERR.requestFailed}\nGraphQL errors: ${errMsg}`);
    }

    const outPath = path.join(OUT_DIR, "profile.json");
    await safeWriteJson(outPath, JSON.stringify(parsed, null, 2));
    console.log("Saved: public/profile.json");
    return;
  }
}

async function fetchMediumBlogs() {
  if (!MEDIUM_USERNAME) return;

  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    `https://medium.com/feed/@${MEDIUM_USERNAME}`
  )}`;

  const res = await fetchWithTimeout(url, { method: "GET" }, 15000);
  const text = await res.text();

  if (!res.ok) {
    throw new Error(`${ERR.requestFailedMedium} (HTTP ${res.status})`);
  }

  // Validate JSON before writing
  const outPath = path.join(OUT_DIR, "blogs.json");
  await safeWriteJson(outPath, JSON.stringify(JSON.parse(text), null, 2));
  console.log("Saved: public/blogs.json");
}

(async function main() {
  try {
    await fs.mkdir(OUT_DIR, { recursive: true });

    if (USE_GITHUB_DATA) {
      await fetchGitHubProfile();
    } else {
      console.log("USE_GITHUB_DATA is false — skipping GitHub fetch.");
    }

    await fetchMediumBlogs();
  } catch (err) {
    console.error("❌ Fetch failed:", err.message || err);
    process.exit(1);
  }
})();
