import { useGetLocalStorage } from "../../assets/hooks/useGetLocalStorage";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const initialValues = useGetLocalStorage(["firstName", "email"]);

  const [values, setValues] = useState({
    firstName: initialValues.firstName || "",
    email: initialValues.email || "",
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
          value={values.firstName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
