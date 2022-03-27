import React from "react"

async function Dogs() {

    const [dog, setDog] = React.useState([]);

    React.useEffect(() => {
        console.log("Running useEffect")
        const GetData = async () => {

            const dogData = await fetch(`http://localhost:4000/`)
            const dogMessage = await dogData.json()
            setDog(dogMessage)
            console.log(dogMessage)
            console.log(dog)

        }
        GetData()
      }, [])

    
    return (
        <div>
            <p>Hello</p>
            <p>${dog}</p>
        </div>
    )
}

export default Dogs