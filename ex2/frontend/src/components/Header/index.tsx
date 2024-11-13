import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer, UlStyled } from "./styles";
import { Scooter } from "@phosphor-icons/react";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Scooter size={64} weight="duotone" />
        <NavContainer>
          <UlStyled>
            <li>
              <Link to={"/"}>Locação</Link>
            </li>
            <li>
              <Link to={"/return"}>Devolução</Link>
            </li>
            <li>
              <Link to={"/create"}>Cadastrar patinete</Link>
            </li>
          </UlStyled>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}
