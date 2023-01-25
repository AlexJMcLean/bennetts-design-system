import siteJson from "../../../.cache/site.json";
import { getComponentCategories } from "@/utils/commonUtilFunctions";
import { SiteJSON } from "@/types";
import Grid from "../Grid";
import { CategoryStyles, ComponentsPageStyles } from "./ComponentsPage.styles";

const pages: SiteJSON = siteJson;

const components = Object.keys(pages).filter((slug) =>
  slug.startsWith("components/")
);

const componentCategories = getComponentCategories();

function ComponentsPage() {
  return (
    <ComponentsPageStyles>
      {componentCategories.map((category) => {
        return (
          <CategoryStyles key={category}>
            <h2>{category}</h2>
            <Grid>
              {components
                .filter((slug) => pages[slug].frontMatter.category === category)
                .map((slug) => {
                  const { title, description = "" } = pages[slug].frontMatter;
                  return (
                    <Grid.Item
                      key={title}
                      title={title}
                      description={description}
                      url={`/${slug}`}
                    />
                  );
                })}
            </Grid>
          </CategoryStyles>
        );
      })}
    </ComponentsPageStyles>
  );
}

export default ComponentsPage;
