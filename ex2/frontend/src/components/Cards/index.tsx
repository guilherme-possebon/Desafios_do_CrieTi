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

interface ICards {
  isLocado: boolean;
}

export function Cards({ isLocado }: ICards) {
  const [patinetes, setPatinetes] = useState<PatineteType[]>([]);

  const getAllPatinetes = async () => {
    // if is true will return in the return screen, if is false, will return in the home screen
    const result = await patinetesApi.getAllPatinetes(isLocado);

    setPatinetes(result);
  };

  const handleRent = (id: number, isLocado: boolean) => {
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
    if (isLocado) {
      Toast.fire({
        icon: "success",
        title: `Patinite número ${id} devolvido com sucesso!`,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: `Patinite número ${id} alugado com sucesso!`,
      });
    }
    getAllPatinetes();
  };

  useEffect(() => {
    getAllPatinetes();
  }, []);

  return (
    <>
      <PatineteContainer>
        {patinetes.length > 0 ? (
          patinetes.map((patinete) =>
            patinete.funcionando ? (
              <RentCard
                key={patinete.id}
                locado={patinete.locado}
                id={patinete.id}
                onRent={handleRent}
              />
            ) : null
          )
        ) : (
          <div>Todos os patinetes já estão locados!</div>
        )}
      </PatineteContainer>
    </>
  );
}
