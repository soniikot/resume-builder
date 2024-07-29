import { useState, useEffect } from "react";

export function useGetLocalStorage(fields) {
  const [values, setValues] = useState(() => {
    const initialValues = {};
    fields.forEach((name) => {
      const savedField = localStorage.getItem(name);
      if (savedField) {
        initialValues[name] = savedField;
      }
    });
    return initialValues;
  });

  useEffect(() => {
    const newValues = {};
    fields.forEach((name) => {
      const savedField = localStorage.getItem(name);
      if (savedField) {
        newValues[name] = savedField;
      }
    });
    setValues((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(newValues)) {
        return newValues;
      }
      return prev;
    });
  }, [fields]);

  return values;
}
