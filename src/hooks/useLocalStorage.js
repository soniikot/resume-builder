import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = []) {
  const [values, setValues] = useState(initialValue); // fieldList

  const setInnerValue = (name, value, id) => {
    const index = values.findIndex((field) => field.id === id);

    const newValues = [...values];
    if (index >= 0) {
      newValues[index] = { ...newValues[index], [name]: value };
    } else {
      newValues.push({ id, [name]: value });
    }

    localStorage.setItem(key, JSON.stringify(newValues));
    setValues(newValues);
  };

  useEffect(() => {
    const savedField = localStorage.getItem(key);

    if (savedField) {
      const savedData = JSON.parse(savedField);
      setValues(savedData);
    }
  }, [key]);

  return [values, setInnerValue];
}
