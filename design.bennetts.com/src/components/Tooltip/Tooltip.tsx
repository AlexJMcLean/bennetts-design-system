import {
  flip,
  offset,
  shift,
  useFloating,
  autoUpdate,
  useDismiss,
  useHover,
  useFocus,
  useRole,
  useInteractions,
} from "@floating-ui/react-dom-interactions";
import React, { cloneElement, useState } from "react";
import { TooltipStyles, ContentStyles } from "./Tooltip.styles";

interface Props {
  ariaLabel: string;
  renderContent: () => React.ReactNode;
  children: JSX.Element;
}

function Tooltip({ children, ariaLabel, renderContent }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const { x, y, reference, floating, strategy, context, placement } =
    useFloating({
      placement: "top",
      open,
      onOpenChange: setOpen,
      middleware: [offset(5), flip(), shift({ padding: 8 })],
      whileElementsMounted: autoUpdate,
    });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      {open && (
        <TooltipStyles
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
            },
          })}
          data-placement={placement}
          aria-label={ariaLabel}
        >
          <ContentStyles>{renderContent()}</ContentStyles>
        </TooltipStyles>
      )}
    </>
  );
}

export default Tooltip;
