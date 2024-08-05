import { useState, useEffect } from "react";

// ("genInfo", [''])

export function useLocalStorage(key) {
  const [ key ] = useState(key);
  const [values, setValues] = useState([]); //fieldList

  const setInnerValue = (name, value, id) => {
    [{
      id: '0',
      jobTitle: 'name',
      dates: '123124'
    },
    {
      id: '1',
      jobTitle: 'name2',
      dates: '123124'
    },
    ]
    const newValue = {}

    const oldField = values.find((field) => field.id === id )

    //TODO 
    /**
      * newValues = [...,  {updated field}] 
      * 
      * localStorage
      * 
      * setValue(newValues)
      * 
      **/

    if (oldField) {
      newValue[name] = value
    } else {
      newValue[name] = value
      newValue[id] = values.length
    }

    localStorage.setItem(key, [...]);
    
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const savedField = localStorage.getItem(key); //"" null

    if (savedField) {
      const savedData = JSON.parse(savedField);
      setValues(savedData);
    }
  }, []);

  return [values, setInnerValue];
}
