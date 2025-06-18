import styled from '@emotion/styled';

export const Item = styled.li`
  list-style: none;
  width: 180px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #fff;
  transition: transform 0.2s;
  &:hover,
  &:focus-within {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

export const StyledLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 8px;
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
`;

export const Poster = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
`;