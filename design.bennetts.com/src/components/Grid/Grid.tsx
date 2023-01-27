import Link from "next/link";
import React from "react";
import {
  GridStyles,
  GridItemStyles,
  PreviewStyles,
  TextStyles,
} from "./Grid.styles";

interface Props {
  children: React.ReactNode;
}

function Grid({ children }: Props) {
  return <GridStyles>{children}</GridStyles>;
}

export interface GridItemProps {
  title: string;
  description: string;
  url: string;
  renderPreview?: () => React.ReactNode;
}

function GridItem({ title, description, url, renderPreview }: GridItemProps) {
  return (
    <GridItemStyles>
      <Link href={url}>
        {renderPreview && <PreviewStyles>{renderPreview()}</PreviewStyles>}
        <h4>{title}</h4>
        <p>{description}</p>
      </Link>
    </GridItemStyles>
  );
}

Grid.Item = GridItem;

export default Grid;
