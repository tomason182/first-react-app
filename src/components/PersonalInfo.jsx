export default function PersonalInfo() {
  return (
    <form action="" method="get" className="form personal-info">
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="full-name">Full name</label>
        <input type="text" name="full-name" />

        <label htmlFor="phone-number">Phone number</label>
        <input type="tel" name="phone-number" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" />

        <label htmlFor="social">LinkedIn Profile</label>
        <input type="email" name="social" />

        <label htmlFor="location">Region / Country</label>
        <input type="tel" name="location" />
      </fieldset>
    </form>
  );
}
