import {
  Button,
  PadlockIcon,
  HintWrapper,
  Image,
  CardContainer,
} from "./styles";
import Patinete from "../../../../assets/patinete.webp";
import { patinetesApi } from "../../../../api/routes/patinetes";

interface AlugarButtonProps {
  id: number;
  locado: boolean;
  onRent: (id: number) => void;
}

export function RentCard({ locado, id, onRent }: AlugarButtonProps) {
  const handleRent = async () => {
    if (!locado) {
      const existingPatinete = await patinetesApi.getPatineteById(id);

      const result = await patinetesApi.updatePatinete(id, {
        ...existingPatinete,
        locado: true,
      });

      console.log(result);
      onRent(id);
    }
  };
  return (
    <CardContainer>
      <p>Patinete número: {id}</p>
      <Image src={Patinete} />
      <HintWrapper>
        <Button $clickable={!locado} onClick={handleRent}>
          {locado && <PadlockIcon>🔒</PadlockIcon>}
          Alugar
        </Button>
        {locado && <span className="hint">O patinete já está alugado</span>}
      </HintWrapper>
    </CardContainer>
  );
}
