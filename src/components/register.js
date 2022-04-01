
import '../Styles/Forms.css'
import React from 'react'
import axios from 'axios'
import dog1 from '../assets/loginDog1.png'
import dog2 from '../assets/loginDog2.png'

<link rel="stylesheet" href="../Styles/Form.css"></link>

function Register() {

    // States for registration
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [aboutMe, setAboutMe] = React.useState('')
    const [availability, setAvailability] = React.useState('')
    const [role, setRole] = React.useState('')
    const [user, updateUser] = React.useState('')

    // States for checking the errors
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState(false);
 

    //POST user
    React.useEffect(() => {

        async function fetchData() {
            const user = { name: name, eMail: email, password: password, image: profilePic, location: location, aboutMe: aboutMe, availability: availability, role: role };
            const resp = await axios.post('https://walkies-backend.herokuapp.com/register', user)
            updateUser(resp)  
            console.log(resp)
        }

        fetchData();
    }, )
    console.log(user)

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleProfilePic = (e) => {
        setProfilePic(e.target.value);
        setSubmitted(false);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
        setSubmitted(false);
    };

    const handleAboutMe = (e) => {
        setAboutMe(e.target.value);
        setSubmitted(false);
    };

    const handleAvailability = (e) => {
        setAvailability(e.target.value);
        setSubmitted(false);
    };

    const handleRole = (e) => {
        setRole(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || profilePic === '' || location === '' || aboutMe === '' || availability === '' || role === '') {
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
                <h1>User {name} successfully registered! 🐶🐾 </h1>
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
        <>
        <div className="forms-and-photos">
            <img src = {dog2} alt="dog"></img>
        <div className="form">
            <div>
                <h2>User Registration 🐾</h2>
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

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />

                <label className="label">Profile picture (URL)</label>
                <input onChange={handleProfilePic} className="input"
                    value={profilePic} type="text" />

                <label className="label">Location</label>
                <input onChange={handleLocation} className="input"
                    value={location} type="text" />

                <label className="label">About Me</label>
                <input onChange={handleAboutMe} className="input"
                    value={aboutMe} type="text" />

                <label className="label">Availability (Monday-Sunday)</label>
                <input onChange={handleAvailability} className="input"
                    value={availability} type="text" />

                <label className="label">Are you a Owner or a Borrower 🐶🐾 </label>
                <input onChange={handleRole} className="input"
                    value={role} type="text"/>

                <button className="button" onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
           
        </div>
        <img src = {dog1} alt="dog"></img>
        </div>
        </>
    );
}

export default Register