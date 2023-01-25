import { mediaQueries } from "../../assets/styles/stylesVariables";
import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  gap: 5rem;
  margin-right: auto;
  margin-left: auto;
  max-width: var(--page-max-width);
  padding: 0 4rem;

  @media screen and (max-width: ${mediaQueries.tablet}) {
    pading: 0 1.25rem;
  }
`;
