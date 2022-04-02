// import { useState } from "react";
import React from "react";
import axios from "axios";
import "../Styles/Forms.css";

const CreateDog = () => {

  // OLD WAY:
  // const [formData, setFormData] = useState({
  //   image: "https://moderndogmagazine.com/sites/default/files/images/articles/top_images/bigstock-black-dalmatian-dog-outdoors-i-96150509.png",
  //   comments: {
  //     text: "",
  //     createdBy: "",
  //     sentAt: "",
  //   },
  // });
  // const [errorMessage, setErrorMessage] = useState(null);

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   console.log(formData);

  //   e.preventDefault();
  //   try {
  //     axios({
  //       method: "post",
  //       url: "https://walkies-backend.herokuapp.com/dogs",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: formData,
  //     }).then((response) => {
  //       // Console logging the data
  //       console.log(response.data);
  //     });

  //     //   const res = await axios.post("https://walkies-backend.herokuapp.com/dogs", formData, config)
  //     //   console.log(res)
  //   } catch (e) {
  //     setErrorMessage(e.response.data.message);
  //   }
  // };

  // NEW WAY:

  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({})

  // Handling onChange
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSubmitted(false);
  }

  // Handling the form submission
  const onSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const config = {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}
      const resp = await axios.post('https://walkies-backend.herokuapp.com/dogs', formData, config)
      console.log(resp)
      setSubmitted(true);
      setError(false);
    }
    catch (e) {
      setError(e.response.data.message)
    }
  }

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Dog successfully posted! 🐶🐾 </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  return (
    <div className="create-dog-section">
      <h1>Add a dog 🐶🐾</h1>
      {errorMessage && <div className="failure">{errorMessage}</div>}
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your dog's name"
          name="name"
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Enter your dog's age"
          name="age"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Photo URL"
          name="image"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="What breed is your pup?"
          name="breed"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter your location"
          name="location"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Availability (Monday-Sunday)"
          name="availability"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Please provide a description of your dog"
          name="description"
          onChange={onChange}
        />

        <button className="button" type="submit">
          Add dog
        </button>
      </form>
    </div>
  );
};

export default CreateDog;
