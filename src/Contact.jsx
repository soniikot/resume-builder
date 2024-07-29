import useLocalStorage from "./assets/hooks/useLocalStorage";

import "./Contact.css";

export default function Contact() {
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
    localStorage.setItem("name", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    localStorage.setItem("email", e.target.value);
  };
  return (
    <div>
      <h2>Contact information</h2>
      <form className="form">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" />

        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" />
      </form>
    </div>
  );
}
