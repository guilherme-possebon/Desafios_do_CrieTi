import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const NavContainer = styled.nav`
  display: flex;
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme["base-text"]};
  }
`;
