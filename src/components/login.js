import React from "react"
import Logo from "../assets/walkieslogo.png"
import { useState } from 'react';
import '../Forms.css'
import axios from 'axios';

function Login() {

    // States for login form
    const [eMail, setEMail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState('')
    const [error, setError] = useState('')

    // Handling input changes
    const handleEMail = (e) => {
        setEMail(e.target.value)
        setSubmitted(false)
        setError(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSubmitted(false)
        setError(false)
        console.log(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (eMail === "" || password === "") {
            setError(true)
        } else {
            setSubmitted(true)

    
            axios({
                method: 'post',
                url: 'https://walkies-backend.herokuapp.com/signin',
                data: {
                    "eMail": "laura@doggyHQ.com",
                    "password": "dogsaremyfave"
                  }
            })
            .then(response => {
                console.log(`api key: ${response.data.token}`);
            })
            .catch(error => {
                console.log(error);
            })

            // window.open("/dogs");
        }
    }

    const successMessage = () => {
        return (
            <div style={{display: submitted ? "" : "none"}} >
                <h2>Login Successful. Redirecting you now...</h2>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div style={{display: error ? "" : "none"}} >
                <h2>There was an error. Please check your fields and try again.</h2>
            </div>
        )
    }

    return (

        <section>
            <div>
                <div className="form">
                <h2>Login to your account here:</h2>
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <section>
                    <form>
                        <label className="label" htmlFor="eMail">Email Address:</label><br></br>
                        <input className="input" onChange={handleEMail} type="text" id="eMail" name="eMail"></input><br></br>

                        <label className="label" htmlFor="password">Password:</label><br></br>
                        <input className="input" onChange={handlePassword} type="text" id="password" name="password"></input><br></br>
                        
                        <input className="btn" onClick={handleSubmit} type="submit" value="Submit"></input>
                    </form>
                </section>
                </div>
            </div>
        </section>
    )
}

export default Login

