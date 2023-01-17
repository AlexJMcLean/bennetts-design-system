import { mediaQueries } from "@/assets/styles/stylesVariables";
import styled, { css } from "styled-components";

interface NavItemSectionProps {
  isNewSection: boolean | undefined;
}
export const NavItemSectionStyles = styled.li<NavItemSectionProps>`
  margin-top: ${(props) => (props.isNewSection ? "1.25rem" : "0")};
`;

interface NavItemElementProps {
  isCurrent: boolean;
}
export const NavItemElementStyles = styled.span<NavItemElementProps>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0.05rem 0.75rem 0.05rem 1.5rem;
  border-radius: var(--border-raduis-500);
  transition: box-shadow 0.2s linear;

  &:hover {
    background: var(--surface);
  }

  ${(props) =>
    props.isCurrent &&
    css`
      background: var(--surface);
      font-weight: var(--font-weight-500);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.033),
        0 2px 50px rgba(0, 0, 0, 0.033);

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 4px;
        width: 4px;
        background: var(--primary);
        border-radius: var(--border-radius-400);
        animation: fade-in 0.1s ease-out both;

        @keyframes fade-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    `}

  a {
    flex: 1;
    text-decoration: none;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: transparent;
  background-image: url(/images/PlusMinor.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 12px 12px;
  opacity: 0.66;
  border-width: 0;

  @media screen and (mac-width: ${mediaQueries.tablet}) {
    width: 36px;
    height: 36px;
  }

  &:hover {
    opacity: 1;
    background-color: var(--surface-subdued);
  }

  &[aria-expanded="true"] {
    background-image: url(/images/MinusMinor.svg);
  }
`;
