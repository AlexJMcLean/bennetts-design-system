import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import Code from "../Code";
import Markdown from "../Markdown";
import {
  ComponentExampleFrameStyles,
  ComponentExamplesListStyles,
} from "./ComponentExamples.styles";

const exampleIframeId = "example-iframe";
const iframePadding = 192;

export type ComponentExample = {
  code: string;
  description: string;
  filename: string;
  title: string;
};

interface Props {
  examples: ComponentExample[];
}

function formatHTML(html: string): string {
  const tab = "  ";
  let result = "";
  let indent = "";

  html.split(/>\s*</).forEach((element) => {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }
    result += indent + "<" + element + ">\r\n";

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}

function ComponentExamples({ examples }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [htmlCode, setHTMLCode] = useState("");
  const [iframeHeight, setIframeHeight] = useState<number>(400);

  const handleExampleLoad = () => {
    let attempts = 0;

    const waitForExampleContentToRender = setInterval(() => {
      const exampleIframe = document.getElementById(
        exampleIframeId
      ) as HTMLIFrameElement;
      const exampleIframeDOM = exampleIframe?.contentDocument;
      const exampleWrapper = exampleIframeDOM?.getElementById("bds-example");

      if (exampleWrapper) {
        const newHeight = iframePadding + exampleWrapper.offsetHeight;
        setIframeHeight(newHeight);
        setHTMLCode(formatHTML(exampleWrapper.innerHTML));
        clearInterval(waitForExampleContentToRender);
      }

      attempts++;

      if (attempts > 10) {
        clearInterval(waitForExampleContentToRender);
      }
    }, 100);

    return () => clearInterval(waitForExampleContentToRender);
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [examples]);

  return (
    <Tab.Group
      defaultIndex={0}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <Tab.List>
        <ComponentExamplesListStyles id="examples">
          {examples.map((example) => {
            return (
              <Tab key={example.filename}>
                <span>{example.title}</span>
              </Tab>
            );
          })}
        </ComponentExamplesListStyles>
      </Tab.List>
      <Tab.Panels>
        {examples.map(({ filename, description, code }) => {
          const exampleUrl = `/examples/${filename.replace(".tsx", "")}`;

          return (
            <Tab.Panel key={filename}>
              {description ? <Markdown text={description} /> : null}
              <ComponentExampleFrameStyles>
                <iframe
                  src={exampleUrl}
                  height={iframeHeight}
                  onLoad={handleExampleLoad}
                  id={exampleIframeId}
                />
              </ComponentExampleFrameStyles>
              <Code
                code={[
                  { title: "React", code: code.trim() },
                  { title: "HTML", code: htmlCode },
                ]}
              />
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ComponentExamples;
