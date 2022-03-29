import React from "react"

async function Dogs() {

    const [dog, setDog] = React.useState([]);

    React.useEffect(() => {
        console.log("Running useEffect")
        const GetData = async () => {

            const dogData = await fetch(`http://localhost:4000/`)
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
            <p>Hello</p>
            <p>${dog}</p>
        </section>
    )
}

export default Dogs