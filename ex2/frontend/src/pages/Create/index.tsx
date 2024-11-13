import { useState } from "react";
import { PatineteInterface, patinetesApi } from "../../api/routes/patinetes";
import Swal from "sweetalert2";
import { Button, CreateContainer } from "./styles";

export function Create() {
  const [data, setData] = useState<PatineteInterface>();
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

  const postPatinete = async () => {
    const result = await patinetesApi.postPatinete();
    setData(result);
    console.log(result);
    if (data?.funcionando != undefined && data.locado != undefined) {
      Toast.fire({
        icon: "success",
        title: `Novo patinete cadastrado`,
      });
    }
  };

  const handlePostPatinete = () => {
    postPatinete();
  };

  return (
    <>
      <CreateContainer>
        <Button onClick={handlePostPatinete}>Cadastrar novo patinete</Button>
      </CreateContainer>
    </>
  );
}
