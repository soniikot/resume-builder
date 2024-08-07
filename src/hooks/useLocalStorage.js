import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const savedField = localStorage.getItem(key);
    if (savedField) {
      setValues(JSON.parse(savedField));
    }
  }, [key]);

  const setInnerValue = (name, value, id) => {
    const newValues = [...values];
    let field;

    if (id) {
      field = newValues.find((field) => field.id === id);
    } else {
      field = newValues.find((field) => !field.id);
      if (!field) {
        field = {};
      }
    }

    field[name] = value;
    if (id) {
      field.id = id;
    }

    if (!newValues.includes(field)) {
      newValues.push(field);
    }

    localStorage.setItem(key, JSON.stringify(newValues));
    setValues(newValues);
  };

  return [values, setInnerValue];
}
