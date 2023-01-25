import ComponentExamples, {
  ComponentExample,
} from "@/components/ComponentExamples/ComponentExamples";
import { fstat } from "fs";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { parseMarkdown } from "@/utils/markdown";
import { AllTypes } from "@/types";
import { toPascalCase } from "@/utils/commonUtilFunctions";

interface MarkdownData {
  frontMatter: any;
  description: string;
  readme: string;
}

interface Props {
  examples: ComponentExample[];
  title: string;
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
  const propsTable;
};

export const getStaticProps: GetStaticProps<
  Props,
  { component: string }
> = async (context) => {
  const componentSlug = context.params?.component;
  const relativeMdPath = `content/components/${componentSlug}.md`;
  const mdFilePath = path.resolve(process.cwd(), relativeMdPath);

  if (fs.existsSync(mdFilePath)) {
    const componentMarkdown = fs.readFileSync(mdFilePath, "utf-8");
    const data: MarkdownData = parseMarkdown(componentMarkdown);

    const description = data.frontMatter.description;
    const body = data.readme;

    const readme = {description, body};

    const examples = (data?.frontMatter?.examples || []).map(
        (example: ComponentExample) => {
            const examplePath = path.resolve(
                process.cwd(),
                `pages/examples/${example.filename}`
            );
            let code = '';

            if (fs.existsSync(examplePath)) {
                code = fs.readFileSync(examplePath, 'utf-8');
                code = code
                    .split('\n')
                    .filter((line) => !line.includes('withBDSExample'))
                    .join('\n')
            }

            return {...example, code}
        }
    )
    
    const propsFilePath = path.resolve(process.cwd(), `src/data/props.json`);
    const fileContent = fs.readFileSync(propsFilePath, 'utf-8');
    const allType: AllTypes = JSON.parse(fileContent);
    
    const componentDirName = toPascalCase(`${data.frontMatter.title} `);
  const propName = toPascalCase(`${data.frontMatter.title} Props`);
 
  let type = 
};
};
