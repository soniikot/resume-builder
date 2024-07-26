import "./Contact_data.css";

export default function Contact_data() {
  return (
    <div id="1">
      <h2>Contact information</h2>
      <form className="form">
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" />

        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" />
      </form>
    </div>
  );
}
