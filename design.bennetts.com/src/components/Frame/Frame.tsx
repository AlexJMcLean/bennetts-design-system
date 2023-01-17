import { useRef, useState } from "react";
import {
  HeaderStyles,
  Nav,
  NavAndContent,
  NavToggle,
  CloseNavButton,
} from "./Frame.styles";
import logo from "@/assets/svgs/logo.svg";
import navJSON from "@/data/nav.json";
import { NavJson } from "../../../types";
import NavigationItem from "./NavigationItem";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const NAV_ID = "nav";
const nav = navJSON as NavJson;

const Frame = ({ children }: Props) => {
  const [navIsVisible, setNavIsVisible] = useState<boolean>(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const focusFirstItemInNav = () => {
    const selector = `#${NAV_ID} a`;
    const firstLinkInNav: HTMLLinkElement | null =
      document.querySelector(selector);
    firstLinkInNav && firstLinkInNav.focus();
  };

  const handleCloseMenu = () => {
    setNavIsVisible(false);
    menuButtonRef.current?.focus();
  };

  const handleShiftTabPress = (event: React.KeyboardEvent) => {
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      const closeButton = closeButtonRef.current;
      closeButton instanceof HTMLElement && closeButton.focus();
    }
  };

  const handleCloseButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      focusFirstItemInNav();
    }
  };

  return (
    <>
      <HeaderStyles>
        <NavToggle
          id="menu-button"
          aria-label="Open menu"
          aria-controls={NAV_ID}
          aria-expanded={navIsVisible}
          onClick={() => setNavIsVisible(true)}
          ref={menuButtonRef}
        >
          <NavToggleIcon />
        </NavToggle>
        <div className="logo">
          <Image src={logo} alt="logo" width="60" />
          <p>Bennetts Design System</p>
        </div>
        <></>
      </HeaderStyles>
      <NavAndContent>
        <Nav isVisible={navIsVisible}>
          <ul>
            <NavigationItem
              nav={nav}
              level={0}
              handleLinkClick={() => setNavIsVisible(false)}
              handleShiftTabOnFirstLink={handleShiftTabPress}
            />
          </ul>
          <CloseNavButton
            ref={closeButtonRef}
            aria-label="Close menu"
            onClick={handleCloseMenu}
            onKeyDown={handleCloseButtonKeyDown}
          >
            <CloseIcon />
          </CloseNavButton>
        </Nav>
        {children}
      </NavAndContent>
    </>
  );
};

function NavToggleIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414l-6.293 6.293-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 1 0 1.414 1.414l6.293-6.293 6.293 6.293a.998.998 0 0 0 1.707-.707.999.999 0 0 0-.293-.707l-6.293-6.293z" />
    </svg>
  );
}

export default Frame;
