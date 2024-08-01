import { useState, useEffect } from "react";

export function useLocalStorage(fields, initialValues = []) {
  const [values, setValues] = useState(initialValues);

  const setInnerValue = (name, value) => {
    localStorage.setItem(name, value);
    setValues((prev) => {
      const newValues = [...prev];
      newValues[newValues.findIndex((v) => v.name === name)] = { name, value };
      return newValues;
    });
  };

  useEffect(() => {
    fields.forEach((name) => {
      const savedField = localStorage.getItem(name);

      if (savedField) {
        const initialValue = { name, value: savedField };
        setValues((prev) => [...prev, initialValue]);
      }
    });
  }, [fields]);

  return [values, setInnerValue];
}
