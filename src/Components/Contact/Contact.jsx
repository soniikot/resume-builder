import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Contact.css";

const CONTACT = ["firstName", "lastName", "email", "phone", "address"];

export default function Contact() {
  const [values, setValues] = useLocalStorage(CONTACT);

  const { firstName, lastName, email, phone, address } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues(name, value);
  };

  //TODO
  /**
   *
   *  mount + useEffect [] [....]
   * controlled components
   *
   *
   **/

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
