import GoogleIcon from "../../GoogleIcon/GoogleIcon";
import Icon from "../../Icon";
import { FoundationsThumbnailStyles } from "./FoundationsThumbnail.styles";

interface Props {
  icon: string;
  category: string;
}

function FoundationsThumbnail({ icon, category }: Props) {
  return (
    <FoundationsThumbnailStyles data-category={category}>
      <GoogleIcon icon={icon} />
    </FoundationsThumbnailStyles>
  );
}

export default FoundationsThumbnail;
