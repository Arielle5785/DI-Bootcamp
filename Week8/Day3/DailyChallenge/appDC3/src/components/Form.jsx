import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const destination = e.target.destination.value;
    const nutsFree = e.target.nutsFree.checked;
    const lactoseFree = e.target.lactoseFree.checked;
    const vegan = e.target.vegan.checked;

    setFormData({
      firstName,
      lastName,
      age,
      gender,
      destination,
      dietaryRestrictions: {
        nutsFree,
        lactoseFree,
        vegan,
      },
    });
  };

  return (
    <>
      <h2>Sample Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <input type="text" placeholder="First Name" name="firstName" />
        <br />
        <input type="text" placeholder="Last Name" name="lastName" />
        <br />
        <input type="number" placeholder="Age" name="age" />
        <br />

        {/* Radio Buttons */}
        Gender:
        <br />
        <label>
          <input type="radio" name="gender" value="Male" /> Male
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="Female" /> Female
        </label>
        <br />

        {/* Dropdown */}
        <label>
          Select your destination:
          <select name="destination">
            <option value="">-- Please choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
        </label>
        <br />

        {/* Checkbox */}
        Dietary Restrictions:
        <br />
        <label>
          <input type="checkbox" name="nutsFree" /> Nuts free
        </label>
        <br />
        <label>
          <input type="checkbox" name="lactoseFree" /> Lactose free
        </label>
        <br />
        <label>
          <input type="checkbox" name="vegan" /> Vegan
        </label>
        <br />

        {/* Submit Button */}
        <input type="submit" value="Submit" />
      </form>

      {/* Display Data */}
      {formData && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
          <h3>Entered Information:</h3>
          <p>Your name: {formData.firstName} {formData.lastName}</p>
          <p>Your age: {formData.age}</p>
          <p>Your gender: {formData.gender}</p>
          <p>Your destination: {formData.destination}</p>
          <p>Your dietary restrictions:</p>
          <ul>
            <li>Nuts free: {formData.dietaryRestrictions.nutsFree ? "Yes" : "No"}</li>
            <li>Lactose free: {formData.dietaryRestrictions.lactoseFree ? "Yes" : "No"}</li>
            <li>Vegan: {formData.dietaryRestrictions.vegan ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Form;
