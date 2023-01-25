import siteJson from "../../.cache/site.json";
import { SiteJSON } from "..//types";

const pages: SiteJSON = siteJson;

const components = Object.keys(pages).filter((slug) =>
  slug.startsWith("components/")
);

export const getComponentCategories = (): string[] => {
  const componentCategories: string[] = [];
  components.forEach((slug) => {
    const { category = "" } = pages[slug].frontMatter;
    if (!componentCategories.includes(category)) {
      componentCategories.push(category);
    }
  });

  return componentCategories;
};

export const toPascalCase = (string: string): string => {
  return (string.match(/[a-zA-Z0-9]+/g) || [])
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join("");
};
