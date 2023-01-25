import yaml from "js-yaml";

export const parseMarkdown = (inputMarkdown: string) => {
  const readmeSections = inputMarkdown.split("---");
  const frontMatterSection = readmeSections[1];
  const readmeSection = readmeSections.slice(2).join("---");

  const frontMatter = yaml.load(frontMatterSection);

  const description = readmeSection.split("\n\n").find((paragraph) => {
    const content = paragraph.trim().split("\n").join(" ");
    if (paragraph.startsWith("<!--")) {
      return false;
    }
    if (content.length > 0 && content[0] !== "#") {
      return content;
    }
    return false;
  });

  let markdown = readmeSection;

  const out = { frontMatter, description, readme: markdown };

  return out;
};
