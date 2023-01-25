import { mediaQueries } from "@/assets/styles/stylesVariables";
import styled from "styled-components";

export const ComponentExamplesListStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;

  button {
    padding: 0.45rem;
    text-align: left;
    display: flex;
    align-items: flex-start;
    background: transparent;
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius-400);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-500);
    line-height: 1.33;
    color: var(--text-strong);

    &:hover {
      box-shadow: var(--card-shadow-hover);
    }

    &[aria-selected="true"] {
      background: var(--search-highlight-color);
      &:focus {
        box-shadow: var(--focus-outline);
      }
    }
  }
`;

export const ComponentExampleFrameStyles = styled.div`
  margin-bottom: 1rem;
  background: #fafafa;
  border-radius: var(--border-radius-600);
  overflow: hidden;

  iframe {
    display: block;
    resize: horizontal;
    overflow: auto;
    width: 100%;
    max-width: 100%;
    min-width: 375px;
    box-shadow: 20px 0 20px -20px rgba(0, 0, 0, 0.125);

    @media screen and (max-width: ${mediaQueries.mobile}) {
      min-width: 100%;
    }
  }
`;
