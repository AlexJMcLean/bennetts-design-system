import React from "react";
import Container from "../Container";
import Longform from "../Longform";
import { PostStyles } from "./PageLayout.styles";

interface Props {
  title?: string;
  children: React.ReactNode;
}

function PageLayout({ title, children }: Props) {
  return (
    <Container>
      <PostStyles id="main">
        {title && (
          <Longform>
            <h1>{title}</h1>
          </Longform>
        )}
        {children}
      </PostStyles>
    </Container>
  );
}

export default PageLayout;
