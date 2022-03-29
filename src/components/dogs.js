import React from "react"
 function Dogs() {

    const [dog, setDog] = React.useState([]);

    React.useEffect(() => {
        console.log("Running useEffect")
        const GetData = async () => {

            const dogData = await fetch(`https://walkies-backend.herokuapp.com/viewusers`)
            const dogMessage = await dogData.json()
            setDog(dogMessage)
            console.log(dogMessage)
            console.log(dog)

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