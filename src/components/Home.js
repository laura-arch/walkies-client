import React from "react"
import Logo from "../assets/logo1.png"
import Dogs from "../assets/dogs1.png"
import Laura from "../assets/laura.jpg"
import Rex from "../assets/Rex.jpg"
import Marley from "../assets/MarleyFam.jpg"
import "../home.css"
import { Link } from "react-router-dom";



<link rel="stylesheet" href="home.css"></link>

function Home() {
  return (
        <><div className="heading-section">
      <h1>Walkies!</h1>
      <img src = {Logo} alt = "Walkies logo"/>
      <h3>Where Walking Wins Wagging Tails</h3>
      <div className="hero-container">
    </div><div className="hero-image">
      <img className = "dogs-group" src = {Dogs} alt= "Group of dogs"/>
      </div>
      <div className="paragraph-1">
        <p>Welcome to Walkies. Where we pride ourselves on bringing joy to humans and wagging tails for dogs!</p>
      </div>
      </div>
      <section>
      <div className="about-us-container">
      <div className="button-container">
        <button> <Link to="/register">Get Started as an owner</Link></button>

        <button> <Link to="/register">Get Started as a borrower</Link></button>
      </div>
        <h2>About us</h2>
        <h2>Our Mission</h2>
        <p>Our mission at Walkies is to connect owners and trusted people in their area who love to look after dogs. 
          Whether you're a loving owner who just doesn't have the time to walk Lucky as much as you'd hope to, or a 
          borrower who loves the company of animals and looking after dogs, we're here to get you connecte to the right 
          person! Walking wagging tails wins!
        </p>
        <h4>Safe and Secure</h4>
        <p>Walkies has a safe and secure safety method for all of our members. All members take our safety checks so you 
          can be sure that you can always have peace of mind. 
        </p>
        <h4>Join a Community</h4>
        <p>We pride ourselves on having a great community of likeminded people. Join our community for the opportunity to create
          new memories, make new friends, and grow your own special community!
        </p>
        <h4>Spread Joy</h4>
        <p>With Walkies our main mission is to spread joy to both dogs and humans alike. Sound good? Join us on our quest of
          spreading joy!
        </p>
      </div>
      </section>
      <div className="middle-image">
        {/* <img src=""/> */}
      </div>
      <div className="stories-container">
        <h2>Community Stories</h2>
        <h4>Marley with his family and borrowers!</h4>
        <img className ="dog-bigger" src = {Marley} alt = "Dog and his owner and borrowers"/>
        <p>Marley's borrower and owner recently became friends.<br></br> Marley was chuffed to see his favorite two people in the world at his
          sister's birthday party!<br></br> Now, Marley's family made a new friend, <br></br>and he gets to spend more time with all his favorite humans! 
        </p>
        <h4>Rex and his borrower Mickey</h4>
        <img className = "Rex" src = {Rex} alt = "Fluffy cute dog and his borrower"/>
        <p>Mickey absolutely loves dogs. <br></br>But when he met Rex he fell in love! <br></br>Mickey takes Rex for walks around his favorite park every Thursday,<br></br>
          as a school teacher,<br></br> he doesn't have much time to have a dog of his own at the moment,<br></br>but he loves taking relaxing walks with Rex! 
        </p>
        <h4>Lucky and her borrowers Laura and Matt</h4>
        <img className ="dog-bigger" src = {Laura} alt = "White dog and her borrower"/>
        <p>Laura and Matt are huge dog lovers and they love looking after Lucky. <br></br>As students they unfortunantely don't have all the time<br></br>
          and resources to have a full-time dog to care for of their own. <br></br>Their dream is to have plenty of dogs one day,<br></br> but for now they 
          enjoy taking Lucky for walks (and giving her lots of treats!)
        </p>
      </div>
      </>


  )
}

export default Home