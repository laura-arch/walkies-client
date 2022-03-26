import React from "react"
import Logo from "../logo1.png"
import Dogs from "../dogs1.png"
import Laura from "../laura.jpg"
import Rex from "../Rex.jpg"
import Marley from "../MarleyFam.jpg"
import "../home.css"

<link rel="stylesheet" href="home.css"></link>

function Home() {
  return (
        <><div className="heading-section">
      <h1>Walkies!</h1>
      <img src = {Logo} alt = "Walkies logo"/>
      <h3>Where Walking Wins Wagging Tails</h3>
      <div className="hero-container">
    </div><div className="hero-image">
      <img src = {Dogs} alt= "Group of dogs"/>
      </div>
      <div className="paragraph-1">
        <p>Welcome to Walkies. Where we pride ourselves on bringing joy to humans and wagging tails for dogs!</p>
      </div>
      <div className="button-container">
      <button className="get-started-o">Get started as an owner</button>
      <button className="get-started-b">Get started as a borrower</button>
      </div>
      </div>
      <div className="about-us-container">
        <h2>About us</h2>
        <h3>Our Mission</h3>
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
      <div className="middle-image">
        {/* <img src=""/> */}
      </div>
      <div className="stories-container">
        <h2>Community Stories</h2>
        <h4>Lucky and his owner Prudence</h4>
        <img className ="dog-bigger" src = {Marley} alt = "Marley and his owner and borrowers"/>
        <p>blah blah blah </p>
        <h4>Rex and his borrower Martin</h4>
        <img src = {Rex} alt = "Dog and his borrower"/>
        <p>blah blah blah </p>
        <h4>Lucky and her borrowers Natalie and Matt</h4>
        <img className ="dog-bigger" src = {Laura} alt = "Dog and her borrower"/>
        <p>blah blah blah </p>
      </div>
      <button className="get-started-o">Get started as an owner</button>
      <button className="get-started-b">Get started as a borrower</button>

      </>


  )
}

export default Home