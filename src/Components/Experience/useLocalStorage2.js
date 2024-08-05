import { useState, useEffect } from "react";

export function useLocalStorage2(fields, initialValue) {
  const [values, setValues] = useState(() => {
    const item = localStorage.getItem(fields[0]);
    return item ? JSON.parse(item) : initialValue;
  });

  const setInnerValues = (values) => {
    setValues(values);
    localStorage.setItem(fields[0], JSON.stringify(values));
  };

  useEffect(() => {
    const newValues = {};

    fields.forEach((field) => {
      const savedField = localStorage.getItem(field);
      if (savedField) {
        newValues[field] = JSON.parse(savedField);
      }
    });

    setValues((prev) => ({ ...prev, ...newValues }));
  }, [fields]);

  return [values, setInnerValues];
}
