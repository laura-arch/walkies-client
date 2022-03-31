import React from "react";

function Doggo() {

    return (
        <>
        <div>
            <div class="left-side">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh" alt="Dog"></img>
            </div>
            <div>
                <h1>Dog Name</h1>
                <h2>Breed:</h2>
                <h2>Age:</h2>
                <h3>Description:</h3>
                <h2>Location:</h2>
                <h2>Availability</h2>
                <p>Harold is a lovely 4 months old ...</p>
                <form action="http://localhost:3000/">
                    <input type="submit" value="Mesage me!" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Doggo 
