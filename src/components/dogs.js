import React from "react"
import axios from "axios";

 function Dogs() {

    const [dog, setDog] = React.useState(undefined);
    const [dogView, setDogView] = React.useState(undefined);
    const [dogImage, setDogImage] = React.useState(undefined);

    console.log(localStorage.token)

    React.useEffect(() => {
        console.log("Running useEffect")

        axios({
          method: 'get',
          url: 'https://walkies-backend.herokuapp.com/dogs',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        })
        .then(response => {
          // Console logging the data
          console.log(`doggo data: `);
          console.log(response.data);

          // reload
          // Setting the data to State
          setDog(response.data);
          console.log(`Fetching ${response.data[0].name} and friends...`);

          // Adding the dogs to the page
          setDogView(dog.map(x => <>
            <img src={x.image}></img>
            {/* <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"></img> */}
            <h1>{x.name}</h1>
            <h2>Breed: {x.breed}</h2>
            <h2>Age: {x.age}</h2>
            <a href="/dogs/dog"><button>More About Me</button></a>
            </>))
        })
        .catch(error => {
          console.log(error);
        })
      }, [])

    return (
       <section className="dogsPart">
           <h2>Hello Doggos</h2>
         <p>{dog ? dog[0].name : 'Bark'}</p>
         <p>{dog ? dogView : 'Bark'}</p>
       </section>
    )
}

export default Dogs