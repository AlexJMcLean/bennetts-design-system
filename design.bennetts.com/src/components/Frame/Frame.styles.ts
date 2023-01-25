import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/stylesVariables";

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0 1.5rem;
  height: var(--header-height);
  user-select: none;
  background: var(--surface);

  .logo {
    display: flex;
    text-decoration: none;
  }
`;

export const NavAndContent = styled.div`
  display: flex;
  overflow-wrap: anywhere;
`;

const breakpointNav = mediaQueries.tablet;
interface Props {
  isVisible: boolean;
}

export const Nav = styled.nav<Props>`
  position: sticky;
  top: var(--header-height);
  height: calc(100vh - var(--header-height));
  min-width: 18rem;
  max-width: 18rem;
  background: var(--surface-subdued);
  border-radius: 0 var(--border-radius-600) var(--border-radius-600) 0;
  padding: 1rem 4px 1.5rem 6px;
  user-select: none;
  ${({ theme }) => theme.customScrollbars}
  overscroll-behavior: contain;
  overflow: scroll;

  @media screen and (max-width: ${breakpointNav}) {
    padding-top: 4.75px;
  }

  .newSection {
    margin-top: 1.25rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text);

    &:hover {
      color: var(--text-strong);
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    padding: 0;

    > li {
      .NavItem {
        font-size: var(--font-size-400);
        letter-spacing: var(--letter-spacing-100);
        color: var(-- text-strong);

        + ul > li:first-child {
          padding-top: 0.125rem;
        }

        + ul > li:last-child {
          padding-bottom: 0.5rem;
        }

        > a {
          padding: 0.333rem 0;
          color: var(--text-strong);

          @media screen and (max-width: ${breakpointNav}) {
            padding: 0.4rem 0;
            font-size: var(--font-size-400);
          }
        }

        &.isCurrent > a {
          color: var(--primary);
        }
      }

      > ul > li {
        > .NavItem {
          font-size: var(--font-size-200);
          letter-spacing: var(--letter-spacing-300);
          padding-left: 2.25rem;

          > a {
            color: var(--text);
          }

          &.isCurrent > a {
            color: var(--primary);
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpointNav}) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    position: fixed;
    top: 0;
    z-index: 11;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.33);
    height: 100vh;
    border-radius: 0;
  }
`;

export const NavToggle = styled.button`
  min-width: 24px;
  max-width: 24px;
  height: 24px;
  margin-right: 1rem;
  background-color: transparent;

  svg {
    transform: scale(0.8);
  }

  @media screen and (min-width: ${breakpointNav}) {
    display: none;
  }

  @media screen and (max-width: ${mediaQueries.mobile}) {
    margin-right: auto;
  }
`;

export const CloseNavButton = styled.button`
  display: none;

  @media screen and (max-width: ${breakpointNav}) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    background-color: transparent;
    border-radius: var(--border-radius-round);

    svg {
      transform: scale(0.5);
    }
  }
`;

export const PageContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > * {
    width: 100%;
  }
`;
