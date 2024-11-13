import { useState } from "react";
import { PatineteInterface, patinetesApi } from "../../api/routes/patinetes";
import Swal from "sweetalert2";

export function Create() {
  const [data, setData] = useState<PatineteInterface>();

  if (data?.funcionando && data.locado) {
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
      title: `Novo patinete cadastrado`,
    });
  }
  const postPatinete = async () => {
    const result = await patinetesApi.postPatinete();
    setData(result);
    console.log(result);
  };

  const handlePostPatinete = () => {
    postPatinete();
  };

  return (
    <>
      <button onClick={handlePostPatinete}>Cadastrar novo patinete</button>
    </>
  );
}
