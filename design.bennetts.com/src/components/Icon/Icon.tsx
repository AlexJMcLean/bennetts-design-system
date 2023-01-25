import React from "react";
import { IconStyles } from "./Icon.styles";

interface Props {
  source: React.ElementType;
  width?: number | string;
  height?: number | string;
}

function Icon({ source, width = 20, height = 20 }: Props) {
  const SourceComponent = source;
  return (
    <IconStyles>
      <SourceComponent style={{ width, height }} />
    </IconStyles>
  );
}

export default Icon;
