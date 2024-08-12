import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./Contact.css";

const fieldsValidity = {
  firstName: false,
};

export default function Contact({ onError }) {
  const [values, setValues] = useLocalStorage("contact");
  const [errors, setErrors] = useState({});

  const contact = values[0] || {};
  const { firstName, lastName, email, phone, address, position } = contact;

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

    const isValid = getIsValid(value, required);

    onError(!isValid);

    setErrors({ ...errors, [name]: !isValid });

    setValues(name, value, "contact");
  };

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
        {errors.firstName && (
          <span className="errorMessage">Don't leave the field blank</span>
        )}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && (
          <span className="errorMessage">Don't leave the field blank</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <span className="errorMessage"> Don't leave the field blank</span>
        )}

        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
        {errors.phone && (
          <span className="errorMessage"> Don't leave the field blank</span>
        )}

        <label htmlFor="address">Address</label>
        <input
          type="address"
          name="address"
          value={address}
          onChange={handleChange}
          required
        />
        {errors.address && (
          <span className="errorMessage"> Don't leave the field blank</span>
        )}

        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
          required
        />
        {errors.position && (
          <span className="errorMessage"> Don't leave the field blank</span>
        )}
      </form>
    </div>
  );
}
