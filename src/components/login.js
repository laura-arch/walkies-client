import React from "react"
import Logo from "../walkieslogo.png"

function Login() {
    return (

        <section classname = "fullpage">
            <div>
                <img src={Logo} alt = "Walkies Logo" />
                <h1>Welcome to Walkies!</h1>
                <h2>Login to your account here:</h2>
                <section>
                    <form>
                        <label for="eMail">Email Address:</label><br></br>
                        <input type="text" id="eMail" name="eMail"></input><br></br>
                        <label for="password">Password:</label><br></br>
                        <input type="text" id="password" name="password"></input><br></br>
                        <input type="submit" value="Submit"></input>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Login

