import React from "react"
import axios from "axios";

 function Dogs() {

    const [dog, setDog] = React.useState(undefined);

    React.useEffect(() => {
        console.log("Running useEffect")

        // axios({
        //   method: 'post',
        //   url: 'https://walkies-backend.herokuapp.com/signin',
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        //   data: {
        //       "eMail": "laura@doggyHQ.com",
        //       "password": "dogsaremyfave"
        //     }
        // })

        console.log(localStorage.token)        

        // const GetData = async () => {

        //     const dogData = await fetch(`https://walkies-backend.herokuapp.com/register`)
        //     const dogMessage = await dogData.json()
        //     const dogName = await dogMessage.name
        //     setDog(dogName)
        //     console.log(dogMessage)
        //     console.log(dogName)

        // }
        // GetData()
      }, [])

    
    return (
       <section>
           <h2>Hello Doggo</h2>
         <p>{dog ? dog : 'Bark'}</p>
       </section>
    )
}

export default Dogs