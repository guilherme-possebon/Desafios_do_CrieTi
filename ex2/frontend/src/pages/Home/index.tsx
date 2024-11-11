import { useEffect, useState } from "react";
import { patinetesApi } from "../../api/routes/patinetes";
import { RentCard } from "./components/RentCard";
import { PatineteContainer } from "./styles";
import Swal from "sweetalert2";

type PatineteType = {
  id: number;
  funcionando: boolean;
  locado: boolean;
};

export function Home() {
  // State for patinete status

  const [patinetes, setPatinetes] = useState<PatineteType[]>([]);

  const getAllPatinetes = async () => {
    const result = await patinetesApi.getAllPatinetes(false);

    setPatinetes(result);
  };

  const handleRent = (id: number) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: `Patinite número ${id} alugado com sucesso!`,
    });
    getAllPatinetes();
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
              onRent={handleRent}
            />
          ) : null
        )}
      </PatineteContainer>
    </>
  );
}
