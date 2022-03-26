import React from "react"
import Logo from "../walkieslogo.png"
import { useState } from 'react';

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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (eMail === "" || password === "") {
            setError(true)
        } else {
            setSubmitted(true)
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

        <section className = "fullpage">
            <div>
                <img src={Logo} alt = "Walkies Logo" />
                <h1>Welcome to Walkies!</h1>
                <h2>Login to your account here:</h2>
                <section>
                    <form>
                        <label htmlFor="eMail">Email Address:</label><br></br>
                        <input type="text" id="eMail" name="eMail"></input><br></br>
                        <label htmlFor="password">Password:</label><br></br>
                        <input type="text" id="password" name="password"></input><br></br>
                        <input type="submit" value="Submit"></input>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Login

