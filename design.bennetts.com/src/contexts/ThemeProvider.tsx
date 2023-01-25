import { ThemeProvider as StyledThemeProvider, css } from "styled-components";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const ThemeProvider = ({ children }: Props) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

const theme = {
  customScrollbars: css`
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: var(--border-radius-round);
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--text-subdued);
      }
    }
  `,
  heading: css`
    color: var(--text-strong);
  `,

  heading1: css`
    color: var(--text-strong);
    font-size: var(--font-size-1200);
    font-weight: var(--font-weight-700);
    letter-spacing: var(--letter-spacing-700);
    line-height: 1.15;
  `,

  heading2: css`
    color: var(--text-strong);
    font-size: var(--font-size-800);
    letter-spacing: var(--letter-spacing-400);
    font-weight: var(--font-weight-700);
    line-height: 1.25;
  `,

  heading3: css`
    color: var(--text-strong);
    font-size: var(--font-size-600);
    font-weight: var(--font-weight-700);
    letter-spacing: var(--letter-spacing-200);
    line-height: 1.25;
  `,

  heading4: css`
    color: var(--text-strong);
    font-size: var(--font-size-400);
    font-weight: var(--font-weight-600);
    letter-spacing: var(--letter-spacing-200);
  `,
};
export default ThemeProvider;
