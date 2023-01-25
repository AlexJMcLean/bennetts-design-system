import genCacheJson from "./gen-cache-json.mjs";

const genAssets = async () => {
  await Promise.all([genCacheJson()]);
};

await genAssets();
