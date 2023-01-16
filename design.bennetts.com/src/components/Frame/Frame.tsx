import { HeaderStyles } from "./Frame.styles";

interface Props {
  children: React.ReactNode;
}

const Frame = ({ children }: Props) => {
  return (
    <>
      <HeaderStyles>
        <></>
      </HeaderStyles>
    </>
  );
};

export default Frame;
