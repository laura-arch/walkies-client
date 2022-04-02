import React from 'react'
import axios from 'axios'

function Messages() {
    
    const [messages, updateMessages] = React.useState('')
    
    React.useEffect(() => {
        console.log(localStorage)

        axios({
            method: 'get',
            url: 'https://walkies-backend.herokuapp.com/dogs',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {

                console.log(response.data);
                updateMessages(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])



    return (
        <section>{
            messages ? messages.map(x => 
                <div>
                    <h2>{x.name}</h2>
                    <img className="dog-image" alt="Dog" src={x.image}></img>

                    <h3>Messages:</h3>
                    <p>{x.comments}</p>
                </div>) 
            : <p>Loading your messages 🐾</p>}
            
        </section>
    )
}

export default Messages