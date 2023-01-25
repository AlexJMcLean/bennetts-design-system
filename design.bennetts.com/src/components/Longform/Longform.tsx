import React from "react";
import { ContentStyles, LongformStyles } from "./Longform.styles";

interface Props {
  firstParagraphIsLede?: boolean;
  children: React.ReactNode;
}

function Longform({ firstParagraphIsLede = true, children }: Props) {
  return (
    <LongformStyles>
      <ContentStyles firstParagraphIsLede={firstParagraphIsLede}>
        {children}
      </ContentStyles>
    </LongformStyles>
  );
}

export default Longform;
