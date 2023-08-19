import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ id }) => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    cities: [],
  });

  useEffect(() => {
    axios
      .get(`https://some-data.onrender.com/stores/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
      .put(`https://some-data.onrender.com/stores/${id}`, formData)
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
      <h2>Update Item</h2>
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
