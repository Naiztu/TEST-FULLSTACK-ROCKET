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

/**
 * The `useDataSession` function is a custom hook in JavaScript that manages a data session by storing
 * and retrieving data from local storage.
 * @param nameItem - The name of the item you want to store in the local storage.
 * @returns an object with two properties: 
 * "item" is the data stored in the local storage, 
 * and "setNewValue" is the function that updates the data stored in the local storage.
 */
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
