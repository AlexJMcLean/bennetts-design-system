import path from "path";
import globby from "globby";
import { existsSync, rmSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import matter from "gray-matter";
import set from "lodash.set";

// We have to normalise the current working directory as Globby does not
// regognise the Windows backslash method of writing paths
const normalisedCwd = process.cwd().replace(/\\/g, "/");

const cacheDir = path.join(normalisedCwd, ".cache");
const siteJsonFile = `${cacheDir}/site.json`;
const navJsonFile = `${cacheDir}/nav.json`;

const genNavJson = (mardownFiles) => {
  let nav = {};

  mardownFiles.forEach((md) => {
    const {
      title,
      navTitle,
      icon,
      description,
      order,
      newSection,
      hideChildren,
      color,
      url,
      status,
    } = md.frontMatter;
    const { slug } = md;
    console.log(slug);

    const path = `children.${slug.replace(/\//g, ".children.")}`;

    set(nav, path, {
      title: navTitle || title,
      icon,
      description,
      order,
      slug: url || `/${slug}`,
      newSection,
      hideChildren,
      color: color ? color.replace(/\\/g, "") : undefined,
      status,
    });
  });

  writeFileSync(navJsonFile, JSON.stringify(nav), "utf-8");
};

const genSiteJson = (data) => {
  const json = {};
  data.forEach((md) => (json[md.slug] = { frontMatter: md.frontMatter }));

  writeFileSync(siteJsonFile, JSON.stringify(json), "utf-8");
};

const getMdContent = (filePath) => {
  const fileContent = readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const slug = filePath
    .replace(`${normalisedCwd}/content/`, "")
    .replace("/index.md", "")
    .replace(".md", "");

  return { frontMatter: data, slug };
};

const genCacheJson = () => {
  if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true });

  const pathGlob = [
    path.posix.join(normalisedCwd, "content/*.md"),
    path.posix.join(normalisedCwd, "content/**/*.md"),
  ];

  const mdFiles = globby.sync(pathGlob);

  const mardownFiles = mdFiles
    .map((filePath) => getMdContent(filePath))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  genSiteJson(mardownFiles);
  genNavJson(mardownFiles);

  console.log("✅ Generated .cache/nav.json and .cache/site.json");
};

genCacheJson();

export default genCacheJson;
