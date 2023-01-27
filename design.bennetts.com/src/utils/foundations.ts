import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { FoundationsProps } from "../components/FoundationsPage/FoundationsPage";
import { normaliseCwd, uppercaseFirst } from "./commonUtilFunctions";
import { MarkdownFile } from "../types";
import { parseMarkdown } from "./markdown";
import globby from "globby";

const normalisedCwd = normaliseCwd();

export const getStaticPropsForFoundations = (category: string) => {
  const getStaticProps: GetStaticProps<FoundationsProps> = async () => {
    const markdownPath = path.posix.join(
      normalisedCwd,
      `content/${category}/index.md`
    );
    const markdown = fs.readFileSync(markdownPath, "utf-8");
    const {
      frontMatter: { description },
    }: MarkdownFile = parseMarkdown(markdown);

    const globPath = [
      path.posix.join(normalisedCwd, `content/${category}/*.md`),
      path.posix.join(normalisedCwd, `content/${category}/*/index.md`),
    ];

    const itemPaths = globby
      .sync(globPath)
      .filter((path) => !path.endsWith(`content/${category}/index.md`));

    let items: FoundationsProps["items"] = [];

    itemPaths
      .filter((path) => !path.endsWith(`content/${category}/index.md`))
      .forEach((markdownFilePath) => {
        const markdown = fs.readFileSync(markdownFilePath, "utf-8");
        const { frontMatter }: MarkdownFile = parseMarkdown(markdown);
        const {
          title,
          description,
          order,
          icon,
          url: frontMatterUrl,
        } = frontMatter;

        const url =
          frontMatterUrl ??
          markdownFilePath
            .replace(`${normalisedCwd}/content`, "")
            .replace("/index", "")
            .replace(/\.md$/, "");

        items.push({
          title,
          description: description || "",
          icon: icon || "",
          url,
          order: !isNaN(parseInt(order)) ? order : 1000,
        });
      });

    return {
      props: {
        title: uppercaseFirst(category),
        description: description || "",
        items,
      },
    };
  };
  return getStaticProps;
};
