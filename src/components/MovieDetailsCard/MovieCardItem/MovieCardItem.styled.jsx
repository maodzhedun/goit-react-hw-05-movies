import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 16px 0;
`;

export const Poster = styled.img`
  width: 220px;
  height: 330px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  margin: 0 0 16px 0;
  font-size: 2rem;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  margin: 12px 0;
  font-size: 1rem;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 16px;
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: #0d47a1;
  }
`;
