import { useState } from "react";
import Swal from "sweetalert2";
import useDataSession from "./useDataSession";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../services/mutations/UserMutations";

/**
 * The `useForm` function is a custom hook in JavaScript that handles form data, updates the data
 * state, and submits the form by send the data to the backend and displaying success or error messages.
 * @param initialData - The initialData parameter is the initial state of the form data. It is an
 * object that contains the initial values for the form fields.
 * @returns The `useForm` function returns an object with three properties: 
 * `data`: the form data, `handle`: the function that handles the form data, 
 * and `submit`: the function that submits the form.
 */
export const useForm = (initialData) => {
  const [data, setData] = useState(initialData);
  const { setNewValue } = useDataSession("data");
  const [createUser] = useMutation(CREATE_USER);

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
      await createUser({
        variables: {
          ...data,
          yearBirth: parseInt(data.yearBirth),
          monthBirth: parseInt(data.monthBirth),
          dayBirth: parseInt(data.dayBirth),
        },
      });

      setNewValue(data);
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por los datos.",
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
