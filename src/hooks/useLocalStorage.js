import { useState, useEffect } from "react";

export function useLocalStorage(fields) {
  const [values, setValues] = useState({});

  const setInnerValue = (name, value) => {
    localStorage.setItem(name, value);
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const newValues = {};

    fields.forEach((name) => {
      const savedField = localStorage.getItem(name);

      if (savedField) {
        newValues[name] = savedField;
      }
    });

    setValues((prev) => {
      return { ...prev, ...newValues };
    });
  }, [fields]);

  return [values, setInnerValue];
}
