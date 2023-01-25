import styled from "styled-components";

export const CopyButtonStyles = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border-radius: var(--border-radius-200);
  opacity: 0.5;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    opacity: 1;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &:focus-visible {
    box-shadow: none;
    opacity: 1;
  }
`;
