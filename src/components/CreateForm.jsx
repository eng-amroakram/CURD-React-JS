import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cities: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const cities = value.split(",");
    setFormData({
      ...formData,
      [name]: value,
      cities,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("https://some-data.onrender.com/stores", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigation("/");
  };

  return (
    <div>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="cities">Cities</label>
          <input
            type="text"
            id="cities"
            name="cities"
            value={formData.cities}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateForm;
