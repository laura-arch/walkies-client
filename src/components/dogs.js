import React from "react"
import axios from "axios";

 function Dogs() {

    const [dog, setDog] = React.useState(undefined);

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

        })
        .catch(error => {
          console.log(error);
        })
      }, [])
    return (
       <section className="dogsPart">
           <h2>Hello Doggos</h2>
         <p>{dog ? dog[1].name : 'Bark'}</p>
         {dog ? dog.map(x => <>
            <img src={x.image}></img>
            <h1>{x.name}</h1>
            <h2>Breed: {x.breed}</h2>
            <h2>Age: {x.age}</h2>
            <a href="/dogs/dog"><button>More About Me</button></a>
            </>) : <p>Loading</p>}
       </section>
    )
}

export default Dogs