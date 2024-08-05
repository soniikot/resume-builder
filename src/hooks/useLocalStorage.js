import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [fieldList, setFieldList] = useState([]); // State variable for fields list

  const setInnerValue = (name, value, id) => {
    // Copy the current fieldList
    const updatedFields = [...fieldList];

    // Find the index of the field by id
    const fieldIndex = updatedFields.findIndex((field) => field.id === id);

    if (fieldIndex >= 0) {
      // Update existing field
      updatedFields[fieldIndex][name] = value;
    } else {
      // Add new field
      updatedFields.push({ id, [name]: value });
    }

    // Update the localStorage
    localStorage.setItem(key, JSON.stringify(updatedFields));

    // Update the state
    setFieldList(updatedFields);
  };

  useEffect(() => {
    const savedField = localStorage.getItem(key); // Get saved fields from localStorage

    if (savedField) {
      const savedData = JSON.parse(savedField); // Parse saved data
      setFieldList(savedData); // Set the state with saved data
    }
  }, [key]);

  return [fieldList, setInnerValue]; // Return the state and the setter function
}
