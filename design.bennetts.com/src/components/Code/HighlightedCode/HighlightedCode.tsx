import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SyntaxHighlighterStyles } from "./HighlightedCode.styles";

interface Props {
  code: string;
  className?: string;
}
function HighlightedCode({ code, className }: Props) {
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "javascript";

  return (
    <SyntaxHighlighterStyles>
      <SyntaxHighlighter
        // eslint-disable-next-line react/no-children-prop
        children={String(code).replace(/\n$/, "")}
        language={lang}
        codeTagProps={{ className: "ActualCode" }}
        useInlineStyles={false}
        wrapLongLines
      />
    </SyntaxHighlighterStyles>
  );
}

export default HighlightedCode;
