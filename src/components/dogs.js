import React from "react"
 function Dogs() {

    const [dog, setDog] = React.useState([]);

    React.useEffect(() => {
        console.log("Running useEffect")
        const GetData = async () => {

            const dogData = await fetch(`https://walkies-backend.herokuapp.com/viewusers`)
            const dogMessage = await dogData.json()
            const dogName = await dogMessage.name
            setDog(dogMessage)
            console.log(dogMessage)
            console.log(dogName)

        }
        GetData()
      }, [])

    
    return (
       <section>
           <h2>Hello Doggo</h2>
         <p>{dog ? dog : 'Bark'}</p>
       </section>
    )
}

export default Dogs