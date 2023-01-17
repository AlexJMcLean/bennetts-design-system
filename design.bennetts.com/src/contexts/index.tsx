import ThemeProvider from "./ThemeProvider";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Providers = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
