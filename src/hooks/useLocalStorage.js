import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [values, setValues] = useState([]);

  const setInnerValue = (name, value, id) => {
    let updatedValues;

    if (id) {
      const index = values.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedValues = [...values];
        updatedValues[index] = { ...updatedValues[index], [name]: value };
      } else {
        updatedValues = [...values, { id, [name]: value }];
      }
    } else {
      updatedValues = { ...values, [name]: value };
    }

    localStorage.setItem(key, JSON.stringify(updatedValues));
    setValues(updatedValues);
  };

  useEffect(() => {
    const savedValues = localStorage.getItem(key);
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, [key]);

  return [values, setInnerValue];
}
