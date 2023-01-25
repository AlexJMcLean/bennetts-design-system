import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NavItem } from "../../../types";
import {
  NavItemElementStyles,
  NavItemSectionStyles,
  ToggleButton,
} from "./NavigationItem.styles";

interface Props {
  nav: NavItem;
  level: number;
  handleLinkClick: () => void;
  handleShiftTabOnFirstLink: (e: React.KeyboardEvent) => void;
}

function NavigationItem({
  nav,
  level,
  handleLinkClick,
  handleShiftTabOnFirstLink,
}: Props) {
  const [manuallyExpandedSections, setManuallyExpandedSections] = useState<{
    [slug: string]: boolean;
  }>({});

  const { asPath } = useRouter();

  const manuallyToggleSection = (slug: string, expanded: boolean) => {
    setManuallyExpandedSections({
      ...manuallyExpandedSections,
      [slug]: expanded,
    });
  };

  useEffect(() => setManuallyExpandedSections({}), [asPath]);

  return (
    <>
      {nav.children &&
        Object.entries(nav.children)
          .sort((_a, _b) => {
            const [, a] = _a as [string, NavItem];
            const [, b] = _b as [string, NavItem];
            return a.title && b.title ? a.title.localeCompare(b.title) : 0;
          })
          .sort((_a, _b) => {
            const [, a] = _a as [string, NavItem];
            const [, b] = _b as [string, NavItem];
            return (
              (typeof a.order !== "undefined" ? a.order : 1000) -
              (typeof b.order !== "undefined" ? b.order : 1000)
            );
          })
          .map((entry, i) => {
            const [key, child] = entry as [string, NavItem];
            if (!child.slug) return null;

            const isExpandable = child.children && !child.hideChildren;
            const id = (child.slug || key).replace(/\//g, "");
            const navAriaId = `nav-${id}`;
            const segments = asPath.slice(1).split("/");
            const keyAndLevelMatchUrl = !!(segments[level] === key);
            const manuallyExpandedStatus = manuallyExpandedSections[key];
            const isExpanded =
              manuallyExpandedStatus === undefined
                ? keyAndLevelMatchUrl
                : manuallyExpandedStatus;
            const removeParams = (path: string) => path.replace(/\?.+$/gi, "");
            const isCurrent = removeParams(asPath) === child.slug;

            return (
              <NavItemSectionStyles
                key={child.slug}
                isNewSection={child.newSection}
              >
                <NavItemElementStyles isCurrent={isCurrent}>
                  <Link
                    href={child.slug}
                    onClick={handleLinkClick}
                    aria-current={isCurrent ? "page" : "false"}
                    onKeyDown={(event) => {
                      if (level === 0 && i === 0) {
                        handleShiftTabOnFirstLink(event);
                      }
                    }}
                  >
                    {child.title}
                  </Link>

                  {isExpandable && (
                    <ToggleButton
                      onClick={() => manuallyToggleSection(key, !isExpanded)}
                      aria-label="Toggle Selection"
                      aria-expanded={isExpanded}
                      aria-controls={isExpanded ? navAriaId : undefined}
                    />
                  )}
                </NavItemElementStyles>

                <AnimatePresence initial={false}>
                  {isExpandable && isExpanded && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, scale: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ ease: "easeInOut", duration: 0.15 }}
                      id={navAriaId}
                    >
                      <NavigationItem
                        nav={child}
                        level={level + 1}
                        handleLinkClick={handleLinkClick}
                        handleShiftTabOnFirstLink={handleShiftTabOnFirstLink}
                      />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </NavItemSectionStyles>
            );
          })}
    </>
  );
}

export default NavigationItem;
