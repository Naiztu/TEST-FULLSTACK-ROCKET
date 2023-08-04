import { useState, useEffect } from "react";

const dataInitial = {
  name: "",
  secondName: "",
  lastName: "",
  secondLastName: "",
  yearBirth: "",
  monthBirth: "",
  dayBirth: "",
  email: "",
  phone: "",
};

export default function useDataSession(nameItem) {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem(nameItem)) || dataInitial
  );

  useEffect(() => {
    const itemInitial =
      JSON.parse(localStorage.getItem(nameItem)) || dataInitial;

    setItem(itemInitial);
  }, []);

  const setNewValue = (newValue) => {
    localStorage.setItem(nameItem, JSON.stringify(newValue));
    setItem(newValue);
  };

  return {
    item,
    setNewValue,
  };
}
