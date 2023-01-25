import { existsSync, mkdirSync, writeFileSync } from "fs";
import set from "lodash.set";
import matter from "gray-matter";
import globby from "globby";

const cacheDir = path.join(process.cwd(), ".cache");
const siteJsonFile = `${cacheDir}/site.json`;
const navJsonFile = `${cacheDir}/nav.json`;

const genNavJson = (markdownFiles) => {
  let nav = {};

  markdownFiles.forEach((md) => {
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
    } = md.frontMatter;
    const { slug } = md;

    const path = `children.${slug.replace(/\//g, ".children")}`;

    set(nav, path, {
      title: navTitle || title,
      icon,
      description,
      order,
      slug: url || `/${slug}`,
      newSection,
      hideChildren,
      color: color ? color.replace(/\\/g, "") : undefined,
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
    .replace(`${process.cwd()}/content/`, "")
    .replace("/index.md", "")
    .replace(".md", "");

  return { frontMatter: data, slug };
};

const genCacheJson = () => {
  if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true });
  const pathGlob = [
    path.join(process.cwd(), "content/*.md"),
    path.join(process.cwd(), "content/**/*.md"),
  ];

  const mdFiles = globby.sync(pathGlob);

  const markdownFiles = mdFiles
    .map((filePath) => getMdContent(filePath))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  genSiteJson(markdownFiles);
  genNavJson(markdownFiles);
};

genCacheJson();

export default genCacheJson;
