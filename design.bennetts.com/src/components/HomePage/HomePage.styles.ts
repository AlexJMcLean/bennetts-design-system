import { mediaQueries } from "../../assets/styles/stylesVariables";
import styled from "styled-components";

export const HomepageStyles = styled.div`
  padding-bottom: var(--header-margin);
`;

export const HeroStyles = styled.div`
  padding: 6rem 0 3rem;
  background: url(/images/home-hero.png);
  background-size: 56% auto;
  background-repeat: no-repeat;
  background-position: 58.5% 33%;

  @media screen and (max-width: ${mediaQueries.desktop}) {
    font-size: var(--font-size-1300);
    background-position: right center;
  }

  @media screen and (max-width: ${mediaQueries.mobile}) {
    padding: 40vw 0 2rem;
    background-size: 60% auto;
    background-repeat: no-repeat;
    background-position: left 1rem;
  }

  h1 {
    margin-bottom: 1rem;
    color: var(--text-strong);
    font-size: var(--font-size-1600);
    font-weight: var(--font-weight-700);
    letter-spacing: var(--letter-spacing-1000);
    line-height: 1.1;

    span {
      display: block;
    }

    @media screen and (max-width: ${mediaQueries.tablet}) {
      font-size: var(--font-size-1300);
    }
  }

  p {
    font-size: var(--font-size-800);
    letter-spacing: var(--letter-spacing-600);
    max-width: 20em;
    color: var(--text-strong);

    @media screen and (max-width: ${mediaQueries.mobile}) {
      font-size: var(--font-size-600);
    }
  }
`;

export const EntryPointsContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

export const EntryPointStyles = styled.div`
  display: block;
  background-color: var(--surface-subdued);
  padding: 2rem;
  border-radius: var(--border-radius-600);
  box-shadow: 0 0.5 var(--border-color);

  h3 {
    ${({ theme }) => theme.heading2};
    margin-bottom: 0.33rem;
  }

  &:hover {
    scale: 1.02;
    h3 {
      text-decoration: underline;
    }
  }

  p {
    font-size: var(--font-size-500);
    color: var(--text);
  }
`;
