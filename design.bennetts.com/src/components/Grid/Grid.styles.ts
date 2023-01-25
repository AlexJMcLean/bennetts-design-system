import styled from "styled-components";

export const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
  gap: 1.75rem 1rem;
`;

export const GridItemStyles = styled.li`
  position: relative;

  h4 {
    ${({ theme }) => theme.heading3}
    margin-bottom: 0.25rem;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    color: var(--text-link);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    padding-right: 0.5rem;
    color: var(--text);
    display: -webkit-box;
    -webkit-line-clamp: vertical;
    overflow: hidden;
  }
`;

export const PreviewStyles = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: var(--border-radius-600);

  img {
    display: block;
  }
`;
