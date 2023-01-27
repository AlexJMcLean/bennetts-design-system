import Grid, { GridItemProps } from "../Grid/Grid";
import Longform from "../Longform";
import PageLayout from "../PageLayout";
import PageMeta from "../PageMeta";
import { FoundationsPageStyles } from "./FoundationsPage.styles";
import FoundationsThumbnail from "./FoundationsThumbnail";

export interface FoundationsProps {
  title: string;
  description: string;
  items: Item[];
}

interface Item extends GridItemProps {
  order: number;
  icon: string;
}

function FoundationsPage({ title, description, items }: FoundationsProps) {
  return (
    <FoundationsPageStyles>
      <PageMeta title={title} description={description} />

      <PageLayout>
        <Longform>
          <h1>{title}</h1>
          <p>{description}</p>
        </Longform>
        <Grid>
          {items
            .sort((a, b) => a.title.localeCompare(b.title))
            .sort((a, b) => a.order - b.order)
            .map((item) => {
              if (!item.url) return null;
              return (
                <Grid.Item
                  key={item.title}
                  {...item}
                  renderPreview={() => (
                    <FoundationsThumbnail
                      icon={item.icon}
                      category={title.toLowerCase()}
                    />
                  )}
                />
              );
            })}
        </Grid>
      </PageLayout>
    </FoundationsPageStyles>
  );
}

export default FoundationsPage;
