import { mediaQueries } from "../../assets/styles/stylesVariables";
import styled, { css } from "styled-components";

export const LongformStyles = styled.div`
    img {
        border-radius: var(--border-radius-200);
        width: 100%;
        height: auto;
    }

    ul li {
        list-style-type: disc;
    }

    h2, 
    h3, 
    h4, 
    p, 
    ul, 
    ol, 
    .usage-list {
        margin: 1rem 0;
    }

    h1 {
        ${({ theme }) => theme.heading1}
        margin-bottom: 1.5rem;
    }
    h2 {
        ${({ theme }) => theme.heading2}
        margin-bottom: 3rem;
    }
    h3 {
        ${({ theme }) => theme.heading3}
        margin-bottom: 1.5rem;
    }
    h4 {
        ${({ theme }) => theme.heading4}
    }

    h3, h4 {
        + p,
        + ul,
        + ol {
            margin-top: -0.5rem;
        }
    }

    ul {
        li {
            margin-left: 0.95rem;
        }
    }

    ol {
        li {
            padding-left: 1.35rem;
        }
    }

    ul,
  ol {
    ul,
    ol {
      margin-top: 0;
      margin-bottom: 0;
    }

    p {
      margin: 0;
    }
  }

  ul li {
    position: relative;
    &::marker {
        color: var(--text);
    }
  }

  ol {
    counter-reset: list;
    li {
        position: relative;
        counter-increment: list;
        &::before {
            content: counter(list) '.';
            display: blockk
            position: absolute;
            left: 0;
            border-radius: var(--border-radius-round);
        }
    }
  }

  li {
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }

    li {
      margin-top: 0.5rem;
    }
  }

  strong {
    font-weight: var(--font-weight-500);
    color: var(--text-strong);
  }

  hr {
    height: 1px;
    box-shadow: 0 0.5 var(--border-color);
    margin: 1rem 0;
    background: var(--surface);
    border-radius: var(--border-radius-200);
    opacity: 0;
    display: none;
  }

  p code {
    font-family: var(--font-family-mono);
    font-size: 0.9em;
    font-weight: var(--font-weight-500);
    background: var(--surface-code-inline);
    border-radius: var(--border-radius-300);
    padding: 0.15rem 0.25rem;
  }

  .usage-list {
    + h3 {
      margin-top: 2.5rem !important;
    }
  }

  table {
    font-size: var(--font-size-300);
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    width: 100%;

    th {
      font-weight: var(--font-weight-600);
      font-size: var(--font-size-300);
      letter-spacing: var(--letter-spacing-100);
      text-align: left;
      background-color: var(--surface-subdued);
      color: var(--text-strong);

      &:first-child {
        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }

    th,
    td {
      padding: 0.6rem 0.70588rem;
      border-bottom: 1px solid var(--border-color);
      vertical-align: top;

      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }

      @media screen and (min-width: ${mediaQueries.desktop}) {
        &:first-child {
          padding-left: 1.5rem;
        }

        &:last-child {
          padding-right: 1.5rem;
        }
      }
    }

    tbody {
      tr:last-child td {
        border-bottom: none;
      }

      tr:last-child td:first-child {
        border-bottom-left-radius: 0.5rem;
      }

      tr:last-child td:last-child {
        border-bottom-right-radius: 0.5rem;
      }
    }

    :global {
    .table-wrapper {
      overflow: auto;
      max-width: calc(100vw - 1.25rem);
      width: 100%;
    }
  }
`;

interface ContentProps {
  firstParagraphIsLede?: boolean;
}
export const ContentStyles = styled.div<ContentProps>`
  ${(props) =>
    props.firstParagraphIsLede &&
    css`
      p:first-of-type {
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: var(--font-size-600);
        font-weight: var(--font-weight-500);
        letter-spacing: var(--letter-spacing-300);
      }
    `}
`;
