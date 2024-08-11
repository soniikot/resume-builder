import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Contact.css";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [values, setValues] = useLocalStorage("contact");

  const contact = values.find((item) => item.id === "contact") || {};
  const { firstName, lastName, email, phone, address, position } = contact;

  const validateName = (value) => {
    if (value.trim() === "") {
      return { isValid: false, errorMessage: "required" };
    } else return { isValid: true, errorMessage: "" };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { isValid, errorMessage } = validateName(value);
    setValues(name, value, "contact"); // always update the state
    if (!isValid) {
      console.log(errorMessage); // log the error message if invalid
    }
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
