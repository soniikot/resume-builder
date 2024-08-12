import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./Contact.css";

const fieldsValidity = {
  firstName: false,
};

// {
//   contact: [{ id: "contact" }];
// }

export default function Contact({ onError }) {
  const [values, setValues] = useLocalStorage("contact");
  const [errors, setErrors] = useState({});

  const contact = values[0] || {};
  const { firstName, lastName, email, phone, address, position } = contact;

  // const validateName = (value) => {
  //   if (value.trim() === "") {
  //     return { isValid: false, errorMessage: "required" };
  //   } else return { isValid: true, errorMessage: "" };
  // };

  const getIsValid = (value, required) => {
    const trimValue = value.trim();

    if (!required) {
      return true;
    }

    if (trimValue === "" && required) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    // const { isValid, errorMessage } = validateName(value);

    const isValid = getIsValid(value, required);

    onError(!isValid);

    setErrors({ ...errors, [name]: !isValid });

    setValues(name, value, "contact");
  };

  console.log(`Contact/Contact.jsx - line: 36 ->> onError `, errors.firstName);

  return (
    <div>
      <h2>General Information</h2>
      <form className="form">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <span>Field not valid</span>}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="address"
          name="address"
          value={address}
          onChange={handleChange}
        />

        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
