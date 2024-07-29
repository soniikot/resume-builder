import { useGetLocalStorage } from "../../assets/hooks/useGetLocalStorage";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const { firstName, lastName, email, phone, address } = useGetLocalStorage([
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
  ]);

  const [values, setValues] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    phone: phone || "",
    address: address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };

  return (
    <div>
      <h2>Contact Information</h2>
      <form className="form">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />

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
      </form>
    </div>
  );
}
