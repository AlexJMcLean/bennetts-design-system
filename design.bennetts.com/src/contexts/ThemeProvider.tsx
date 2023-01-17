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
};
export default ThemeProvider;
