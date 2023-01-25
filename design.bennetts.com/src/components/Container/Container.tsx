import React from "react";
import { ContainerStyles } from "./Container.styles";

interface Props {
  children: React.ReactNode;
}
function Container({ children }: Props) {
  return <ContainerStyles>{children}</ContainerStyles>;
}

export default Container;
