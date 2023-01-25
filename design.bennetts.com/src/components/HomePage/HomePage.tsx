import Link from "next/link";
import PageLayout from "../PageLayout";
import PageMeta from "../PageMeta";
import {
  EntryPointStyles,
  EntryPointsContainerStyles,
  HeroStyles,
  HomepageStyles,
} from "./HomePage.styles";

function HomePage() {
  return (
    <PageLayout>
      <HomepageStyles>
        <PageMeta description="A design system to re-imagine insurance at Bennetts" />

        <HeroStyles>
          <div>
            <h1>
              <span>Build</span>
              <span>Contribute</span>
              <span>Evolve</span>
            </h1>
            <p>
              Help shape our customers experience of the new way to have
              insurance
            </p>
          </div>
        </HeroStyles>

        <EntryPointsContainerStyles>
          <Link href="/components">
            <EntryPointStyles>
              <h3>Components</h3>
              <p>
                Reusable elemnts and styles packaged through code for building
                new experiences within Bennetts
              </p>
            </EntryPointStyles>
          </Link>
          <Link href="/design">
            <EntryPointStyles>
              <h3>Design</h3>
              <p>
                Our Fundamental design and brand guidance for use of all
                elements within Bennetts
              </p>
            </EntryPointStyles>
          </Link>
        </EntryPointsContainerStyles>
      </HomepageStyles>
    </PageLayout>
  );
}

export default HomePage;
