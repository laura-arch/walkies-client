import React from "react";
// import "../App.css"
import axios from 'axios'
import '../Forms.css'

<link rel="stylesheet" href="App.css"></link>

function CreateDog() {

    // Dog state
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [breed, setBreed] = React.useState('');
    const [description, setDescription] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [availability, setAvailability] = React.useState('')

    // Error state
    const [dog, updateDog] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState(false);
 

    //POST dog
    React.useEffect(async () => {
        const dog = { name: name, age: age, breed: breed, description: description, location: location, availability: availability };
        const resp = await axios.post('https://walkies-backend.herokuapp.com/dogs/:dogId', dog)
        updateDog(resp)
    console.log(resp)
    }
  , [])
    console.log(dog)

    // handling changes 

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
        setSubmitted(false);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
        setSubmitted(false);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
        setSubmitted(false);
    };

    const handleBreed = (e) => {
        setBreed(e.target.value);
        setSubmitted(false);
    };

    const handleAvailability = (e) => {
        setAvailability(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || age === '' || breed === '' || description === '' || location === '' ||  availability === '' ) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1> {name} successfully created! 🐶🐾 </h1>
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
                <h1>Please enter all the required fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>Add a pet 🐶🐾</h1>
            </div>
            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />

                <label className="label">Age</label>
                <input onChange={handleAge} className="input"
                    value={age} type="number" />

                <label className="label">Breed</label>
                <input onChange={handleBreed} className="input"
                    value={breed} type="text" />

                <label className="label">Description</label>
                <input onChange={handleDescription} className="input"
                    value={description} type="text" />

                <label className="label">Location</label>
                <input onChange={handleLocation} className="input"
                    value={location} type="text" />

                <label className="label">Availability (Monday-Sunday)</label>
                <input onChange={handleAvailability} className="input"
                    value={availability} type="text" />

                <button className="button" onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
           
        </div>
    );
}


export default CreateDog