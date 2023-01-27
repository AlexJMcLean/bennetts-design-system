import ComponentExamples, {
  ComponentExample,
} from "../../components/ComponentExamples/ComponentExamples";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { parseMarkdown } from "../../utils/markdown";
import { MarkdownData } from "../../types";
import { normaliseCwd } from "../../utils/commonUtilFunctions";
import globby from "globby";
import PageLayout from "../../components/PageLayout";
import PageMeta from "../../components/PageMeta";
import Longform from "../../components/Longform";
import Markdown from "../../components/Markdown";

const normalisedCwd = normaliseCwd();

interface Props {
  title: string;
  examples: ComponentExample[];
  description: string;
  readme: {
    body: string;
    header: string;
  };
}

const Components = ({ examples, title, description, readme }: Props) => {
  const componentExamples = Boolean(examples.length) && (
    <ComponentExamples examples={examples} />
  );

  return (
    <PageLayout title={title}>
      <PageMeta title={title} description={description} />

      <Longform>
        <Markdown text={description} />
        {/* {componentExamples} */}
      </Longform>

      <Longform firstParagraphIsLede={false}>
        <Markdown text={readme.body} />
      </Longform>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<
  Props,
  { component: string }
> = async (context) => {
  const componentSlug = context.params?.component;
  const relativeMdPath = `content/components/${componentSlug}.md`;
  const mdFilePath = path.resolve(normalisedCwd, relativeMdPath);

  if (fs.existsSync(mdFilePath)) {
    const componentMarkdown = fs.readFileSync(mdFilePath, "utf-8");
    const data: MarkdownData = parseMarkdown(componentMarkdown);

    const description = data.frontMatter.description;
    const body = data.readme;

    const readme = { description, body };

    const examples = (data?.frontMatter?.examples || []).map(
      (example: ComponentExample) => {
        const examplePath = path.resolve(
          normalisedCwd,
          `pages/examples/${example.filename}`
        );
        let code = "";

        if (fs.existsSync(examplePath)) {
          code = fs.readFileSync(examplePath, "utf-8");
          code = code
            .split("\n")
            .filter((line) => !line.includes("withBDSExample"))
            .join("\n");
        }

        return { ...example, code };
      }
    );

    const props: Props = {
      ...data.frontMatter,
      description,
      examples,
      readme,
    };
    return { props };
  } else {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const globPath = path.posix.join(normalisedCwd, "content/components/*.md");
  const paths = globby
    .sync(globPath)
    .filter((path) => !path.endsWith("index.md"))
    .map((path) =>
      path.replace(`${normalisedCwd}/content`, "").replace(".md", "")
    );
  return { paths, fallback: false };
};

export default Components;
