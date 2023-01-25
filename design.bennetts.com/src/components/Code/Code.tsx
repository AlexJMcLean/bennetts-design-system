import { Tab } from "@headlessui/react";
import { useState } from "react";
import { string } from "yup";
import { CodeStyles, TopBarStyles } from "./Code.styles";
import CopyButton from "./CopyButton";
import HighlightedCode from "./HighlightedCode";

interface Props {
  code:
    | {
        title: string;
        code: string;
        className?: string;
      }
    | {
        title: string;
        code: string;
        className?: string;
      }[];
}

function Code({ code }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <CodeStyles>
      {Array.isArray(code) ? (
        <Tab.Group selectedIndex={0} onChange={setSelectedIndex}>
          <TopBarStyles>
            <Tab.List className="tabs">
              {code.map(({ title }) => (
                <Tab key={title} className="tab">
                  {title}
                </Tab>
              ))}
            </Tab.List>
            {code[selectedIndex] && (
              <CopyButton code={code[selectedIndex].code} />
            )}
          </TopBarStyles>

          <Tab.Panels>
            {code.map(({ title, code, className }) => (
              <Tab.Panel key={title}>
                <HighlightedCode code={code} className={className} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      ) : (
        <>
          <TopBarStyles>
            <div className="tabs">
              <div className="tab">{code.title}</div>
            </div>
            <CopyButton code={code.code} />
          </TopBarStyles>
          <HighlightedCode code={code.code} className={code.className} />
        </>
      )}
    </CodeStyles>
  );
}

export default Code;
