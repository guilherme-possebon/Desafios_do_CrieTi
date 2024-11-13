import { Cards } from "../../components/Cards";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <h1>Alugar patinete</h1>
        <Cards isLocado={false} />
      </HomeContainer>
    </>
  );
}
