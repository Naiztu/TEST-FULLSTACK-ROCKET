import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import useDataSession from "./useDataSession";

export const useForm = (initialData) => {
  const [data, setData] = useState(initialData);
  const {setNewValue} = useDataSession("data");

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const submit = (e) => {
    e.preventDefault();
    sendMail();
  };

  async function sendMail() {
    try {
      const res = await Axios.post(`http://localhost:3000/user`, data);
      setNewValue(data);
      if (res.status === 200)
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por los datos.",
        });
      else
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "No se pudo enviar el mensaje.",
        });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No se pudo enviar el mensaje.",
      });
    }
  }
  return {
    data,
    handle,
    submit,
  };
};
