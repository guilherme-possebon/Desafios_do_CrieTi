import { useEffect, useState } from "react";
import { patinetesApi } from "../../api/routes/patinetes";
import { RentCard } from "./components/RentCard";
import { PatineteContainer } from "./styles";

type PatineteType = {
  id: number;
  funcionando: boolean;
  locado: boolean;
};

export function Home() {
  // State for patinete status

  const [patinetes, setPatinetes] = useState<PatineteType[]>([]);

  const getAllPatinetes = async () => {
    const result = await patinetesApi.getAllPatinetes();

    setPatinetes(result);
  };

  const updateLocadoStatus = (id: number) => {
    setPatinetes((prevState) =>
      prevState.map((patinete) =>
        patinete.id === id ? { ...patinete, locado: true } : patinete
      )
    );
  };

  useEffect(() => {
    getAllPatinetes();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <PatineteContainer>
        {patinetes.map((patinete) =>
          patinete.funcionando ? (
            <RentCard
              key={patinete.id}
              locado={patinete.locado}
              id={patinete.id}
              onRent={updateLocadoStatus}
            />
          ) : null
        )}
      </PatineteContainer>
    </>
  );
}
