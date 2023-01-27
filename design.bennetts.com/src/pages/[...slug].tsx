import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import Longform from "../components/Longform";
import Markdown from "../components/Markdown";
import PageLayout from "../components/PageLayout";
import PageMeta from "../components/PageMeta";
import { MarkdownFile } from "../types";
import { normaliseCwd } from "../utils/commonUtilFunctions";
import { parseMarkdown } from "../utils/markdown";
import path from "path";
import globby from "globby";

interface Props {
  readme: MarkdownFile["readme"];
  title: string;
  description?: string;
}

const CatchAllTemplate: NextPage<Props> = ({
  readme,
  title,
  description,
}: Props) => {
  return (
    <PageLayout title={title}>
      <PageMeta title={title} description={description} />
      <Longform>
        {description ? <Markdown text={description} /> : null}
        <Markdown text={readme} />
      </Longform>
    </PageLayout>
  );
};

const contentDir = "content";
const normalisedCwd = normaliseCwd();

export const getStaticProps: GetStaticProps<
  Props,
  { slug: string[] }
> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug)
    throw new Error(`Expected params.slug to be defined (as string[])`);

  const slugPath = `${contentDir}/${params.slug.join("/")}`;
  const pathIsDirectory =
    fs.existsSync(slugPath) && fs.lstatSync(slugPath).isDirectory();
  const mdRelativePath = pathIsDirectory
    ? `${contentDir}/${params.slug.join("/")}/index.md`
    : `${contentDir}/${params.slug.join("/")}.md`;

  const mdFilePath = path.posix.join(normalisedCwd, mdRelativePath);

  if (fs.existsSync(mdFilePath)) {
    const markdown = fs.readFileSync(mdFilePath, "utf-8");
    const { readme, frontMatter }: MarkdownFile = parseMarkdown(markdown);
    const { title, description } = frontMatter;
    const props: Props = {
      title,
      description: description || null,
      readme,
    };

    return { props };
  } else {
    return { notFound: true };
  }
};

const catchAllTemplateExcludeList = ["/design", "/content", "/patterns"];

function fileShouldNotBeRenderedWithCatchAllTemplate(path: string): boolean {
  return (
    !path.startsWith("/components") &&
    !catchAllTemplateExcludeList.includes(path)
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const globPath = [
    path.posix.join(normalisedCwd, "content/**/*.md"),
    path.posix.join(normalisedCwd, "content/**/*.md"),
  ];
  const paths = globby
    .sync(globPath)
    .map((filename) =>
      filename
        .replace(`${normalisedCwd}/content`, "")
        .replace("/index.md", "")
        .replace(".md", "")
    )
    .filter(fileShouldNotBeRenderedWithCatchAllTemplate);
  return { paths, fallback: false };
};

export default CatchAllTemplate;
