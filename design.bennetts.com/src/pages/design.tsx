import FoundationsPage from "../components/FoundationsPage";
import { FoundationsProps } from "../components/FoundationsPage/FoundationsPage";
import { getStaticPropsForFoundations } from "../utils/foundations";

const SECTION = "design";

const FoundationsCategory = (props: FoundationsProps) => (
  <FoundationsPage {...props} />
);

export const getStaticProps = getStaticPropsForFoundations(SECTION);

export default FoundationsCategory;
