import React, { useState } from "react";
import { NavItem } from "../../../types";

interface Props {
  nav: NavItem;
  level: number;
  handleLinkClick: () => void;
  handleShiftTabOnFirstLink: (e: React.KeyboardEvent) => void;
}

function NavItem({
  nav,
  level,
  handleLinkClick,
  handleShiftTabOnFirstLink,
}: Props) {
    const [manuallyExpandedSections, setManuallyExpandedSections] = useState<{[slug: string: boolean]}>({})
    const {asPath} = useRouter();
  return <>Nav Item</>;
}

export default NavItem;
