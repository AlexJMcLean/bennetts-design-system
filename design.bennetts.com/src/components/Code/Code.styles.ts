import styled from "styled-components";

export const CodeStyles = styled.div`
  border-radius: var(--border-radius-400);
  max-width: calc(100vw - 1.5rem);
  cursor: text;
  background: var(--surface);
  color: var(--text-strong);
  border: var(--border);
`;

export const TopBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border);

  .tabs {
    padding-left: 1rem;
    display: flex;

    .tab {
      padding-top: 0.66rem;
      padding-bottom: 0.66rem;
      border-radius: var(--border-radius-300);
      background: transparent;
      font-size: var(--fint-size-100);
      color: var(--text-subdued);
    }

    button.tab {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      color: var(--text-strong);

      &[aria-selected="true"] {
        position: relative;

        &:not(:focus-visible) {
          &:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            background: var(--text-strong);
            height: 3px;
            border-radius: var(--border-radius-200) var(--border-radius-200) 0 0;
          }
        }
      }

      &:focus-visible {
        box-shadow: var(--focus-outline);
      }
    }
  }
`;
