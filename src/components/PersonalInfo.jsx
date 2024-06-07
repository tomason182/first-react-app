export default function PersonalInfo() {
  return (
    <form action="" method="get" className="form personal-info">
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="first-name">First name</label>
        <input type="text" name="first-name" />

        <label htmlFor="last-name">Last name</label>
        <input type="text" name="last-name" />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" />

        <label htmlFor="phone-number">Phone number</label>
        <input type="tel" name="phone-number" />
      </fieldset>
    </form>
  );
}
