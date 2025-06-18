import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 32px;
`;

export const Nav = styled.nav`
  margin-top: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
`;

export const NavLink = styled.a`
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover,
  &:focus {
    background: #e3f2fd;
    color: #0d47a1;
  }
`;