import styled from "styled-components";

export const SyntaxHighlighterStyles = styled.div`
  .ActualCode {
    display: block;
    font-family: var(--font-family-mono);
    white-space: pre-wrap;
    padding: 0.85rem 1rem;
    font-size: 14px;
    line-height: 1.6;
    overflow: auto;
    max-height: 50vh;
    ${({ theme }) => theme.customScrollbars}
  }
`;
