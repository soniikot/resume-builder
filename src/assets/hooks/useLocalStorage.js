import { useState, useEffect } from "react";

export function useLocalStorage(fields) {
  const [values, setValues] = useState(() => {
    const initialValues = {};
    fields.forEach((field) => {
      const storedValue = localStorage.getItem(field);
      if (storedValue) {
        initialValues[field] = JSON.parse(storedValue);
      }
    });
    return initialValues;
  });

  useEffect(() => {
    fields.forEach((field) => {
      const storedValue = localStorage.getItem(field);
      if (storedValue) {
        setValues((prevValues) => ({
          ...prevValues,
          [field]: JSON.parse(storedValue),
        }));
      }
    });
  }, [fields]);

  useEffect(() => {
    fields.forEach((field) => {
      if (values[field] !== undefined) {
        localStorage.setItem(field, JSON.stringify(values[field]));
      }
    });
  }, [values, fields]);

  const setField = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return [values, setField];
}
