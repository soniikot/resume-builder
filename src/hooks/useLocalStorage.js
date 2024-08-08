import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [fieldList, setFieldList] = useState([]);

  const setInnerValue = (name, value, id) => {
    const index = fieldList.findIndex((field) => field.id === id);

    const newValues = [...fieldList];
    if (index >= 0) {
      newValues[index] = { ...newValues[index], [name]: value };
    } else {
      newValues.push({ id, [name]: value });
    }

    localStorage.setItem(key, JSON.stringify(newValues));
    setFieldList(newValues);
  };

  useEffect(() => {
    const savedField = localStorage.getItem(key);

    if (savedField) {
      const savedData = JSON.parse(savedField);

      console.log(savedData);
      setFieldList(savedData);
    }
  }, []);

  return [fieldList, setInnerValue, setFieldList];
}
