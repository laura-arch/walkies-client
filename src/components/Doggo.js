import React from "react";
import "../Styles/dog.css"
import "../Styles/Forms.css"

function Doggo() {

    return (
        <>
        <div class="content">
            <img class="hero-image" src="https://i0.wp.com/ohmydogblog.com/wp-content/uploads/2010/03/Emmett.jpg?w=1200&ssl=1" alt="Dog"></img>
            <div>
                <h1>Emmett</h1>
                <h2>Breed: Beagle</h2>
                <h2>Age: 7</h2>
                <h2>Location: South London</h2>
                <h2>Availability: Weekends and evenings</h2>
                <p>Oh, Emmett. Emmett is stubborn but so sweet, a little Velcro strip stuck to my pant-leg. He’s lazy and has serious food-hoarding issues. But he’ll do absolutely anything we ask of him, especially if there’s a treat involved. Emmett loves being the center of attention, loves meeting new people, loves going new places. Emmett is completely and utterly fearless. He tolerates what he doesn’t like – puppies, not being fed on time – with heavy sighs. But he’s happy, oh, is he happy. He wags his curly tail with his entire body. All he wants out of life is a good snuggle, a tasty snack, and a nice, long nap preferably outside, in the sun, on his back.</p>
                <form action="http://localhost:3000/messages">
                    <input type="submit" value="Mesage me!" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Doggo 
