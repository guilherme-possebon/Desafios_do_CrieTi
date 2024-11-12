import { Button, HintWrapper, Image, CardContainer } from "./styles";
import Patinete from "../../../../assets/patinete.webp";
import { patinetesApi } from "../../../../api/routes/patinetes";

interface AlugarButtonProps {
  id: number;
  locado: boolean;
  onRent: (id: number, isLocado: boolean) => void;
}

export function RentCard({ locado, id, onRent }: AlugarButtonProps) {
  const handleRent = async () => {
    if (locado) {
      const existingPatinete = await patinetesApi.getPatineteById(id);

      // if this if run, will set the locado as false
      await patinetesApi.updatePatinete(id, {
        ...existingPatinete,
        locado: !locado,
      });

      onRent(id, locado);
    } else {
      const existingPatinete = await patinetesApi.getPatineteById(id);
      // if this if run, will set the locado as true
      await patinetesApi.updatePatinete(id, {
        ...existingPatinete,
        locado: !locado,
      });

      onRent(id, locado);
    }
  };
  return (
    <CardContainer>
      <p>Patinete número: {id}</p>
      <Image src={Patinete} />
      <HintWrapper>
        <Button onClick={handleRent}>{locado ? "Devolver" : "Alugar"}</Button>
      </HintWrapper>
    </CardContainer>
  );
}
