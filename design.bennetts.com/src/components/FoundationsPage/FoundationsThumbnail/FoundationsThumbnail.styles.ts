import styled from "styled-components";

export const FoundationsThumbnailStyles = styled.div`
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-subdues);

  span {
    opacity: 0.7;
    transform: scale(1.5);
  }

  &[data-category="design"] {
    background: var(--decorative-2);
  }

  &[data-category="content"] {
    background: var(--decorative-1);
  }

  &[data-category="patterns"] {
    background: var(--decorative-3);
  }
`;
