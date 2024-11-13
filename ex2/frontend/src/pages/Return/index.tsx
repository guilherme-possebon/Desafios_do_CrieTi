import { Cards } from "../../components/Cards";
import { ReturnContainer } from "./styles";

export function Return() {
  return (
    <>
      <ReturnContainer>
        <h1>Devolver patinete</h1>
        <Cards isLocado={true} />
      </ReturnContainer>
    </>
  );
}
