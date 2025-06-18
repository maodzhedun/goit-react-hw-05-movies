import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: 180px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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

export const Poster = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  margin: 0 auto 8px auto;
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 4px;
`;