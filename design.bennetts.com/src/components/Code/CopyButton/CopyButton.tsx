import { ClipboardIcon } from "@/assets/icons/clipboard";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import { useCopyToClipboard } from "@/utils/hooks";
import { CopyButtonWrapperStyles, CopyButtonStyles } from "./CopyButton.styles";

function CopyButton({ code }: { code: string }) {
  const [copy, didJustCopy] = useCopyToClipboard(code);
  return (
    <div>
      <Tooltip
        ariaLabel="Copy to clipboard"
        renderContent={() => <p>{didJustCopy ? "Copied" : "Copy"}</p>}
      >
        <CopyButtonStyles
          type="button"
          onClick={copy}
          aria-label="Copy to clipboard"
        >
          <Icon source={ClipboardIcon} width={16} height={16} />
        </CopyButtonStyles>
      </Tooltip>
    </div>
  );
}

export default CopyButton;
