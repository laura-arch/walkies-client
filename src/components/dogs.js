import React from "react"
 function Dogs() {

    const [dog, setDog] = React.useState(undefined);

    React.useEffect(() => {
        console.log("Running useEffect")
        const GetData = async () => {

            const dogData = await fetch(`https://walkies-backend.herokuapp.com/register`)
            const dogMessage = await dogData.json()
            const dogName = await dogMessage.name
            setDog(dogName)
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