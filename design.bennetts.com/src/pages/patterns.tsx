import { FoundationsProps } from "../components/FoundationsPage/FoundationsPage";
import FoundationsPage from "../components/FoundationsPage/";
import { getStaticPropsForFoundations } from "../utils/foundations";

const SECTION = "patterns";

const FoundationsCategory = (props: FoundationsProps) => (
  <FoundationsPage {...props} />
);

export const getStaticProps = getStaticPropsForFoundations(SECTION);

export default FoundationsCategory;
