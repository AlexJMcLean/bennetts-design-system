import styled from "styled-components";

export const TooltipStyles = styled.div`
  pointer-events: none;
  max-width: 240px;
  z-index: 2;
  filter: drop-shadow() (0 5px 20px rgba(0, 0, 0, 0.1));

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 0;
    width: 10px;
    height: 10px;
    margin: 0 auto;
    background: var(--text-strong);
    transform: rotate(45deg);
    z-index: 0;
  }

  &[data-placement="bottom"]:after {
    top: -5px;
    bottom: auto;
    transform: rotate(135deg);
  }
`;

export const ContentStyles = styled.div`
  overflow: hidden;
  border-radius: var(--border-radius-400);
  background: var(--text-strong);
  color: var(--surface);
  text-align: center;
  font-size: var(--font-size-100);
  padding: 0.25rem 0.5rem;
  line-height: 1.4;

  p {
    margin: 0;
  }
`;
