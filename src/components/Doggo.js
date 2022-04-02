import React from "react";
import "../Styles/dog.css";
import "../Styles/Forms.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Doggo() {
  const [dog, setDog] = React.useState(undefined);
  const { dogId } = useParams();

  React.useEffect(() => {
    console.log("this is dogId ", dogId);
    axios({
      method: "get",
      url: `https://walkies-backend.herokuapp.com/dogs/${dogId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        // Console logging the data
        console.log(`doggo data: `);
        console.log(response.data);

        setDog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dogId]);
  console.log()
  return (
    <>

      {dog ? dog.map(x => <div className="dog-profile">
        <img className="dog-image" alt="Dog" src={x.image}></img>
        <h1>{x.name}</h1>
        <h2>Breed: {x.breed}</h2>
        <h2>Age: {x.age}</h2>
        <h2>Location: {x.location}</h2>
        <h2>About this Doggo: {x.description}</h2>
        <h2>Availability: {x.availability}</h2>
        <Link to={`/messages/`}>
          <button>Message me 🐾</button>
        </Link>
      </div>) : <p>Loading</p>}


    </>
  );
}

export default Doggo;
