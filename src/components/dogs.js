import React from "react"
import axios from "axios";

 function Dogs() {

    const [dog, setDog] = React.useState(undefined);
    const [dogView, setDogView] = React.useState(undefined);

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
          console.log(`doggo data: `);
          console.log(response.data);
          setDog(response.data);
          console.log(`Fetching ${response.data[0].name} and friends...`);
          setDogView(dog.map(x => <><h1>{x.name}</h1><h2>{x.breed}</h2><h2>{x.age}</h2></>))
        })
        .catch(error => {
          console.log(error);
        })
      }, [])

    
    return (
       <section>
           <h2>Hello Doggo</h2>
         <p>{dog ? dog[0].name : 'Bark'}</p>
         <p>{dog ? dogView : 'Bark'}</p>
       </section>
    )
}

export default Dogs