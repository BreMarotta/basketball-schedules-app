import React, { useState, useEffect } from 'react' 
import AddLocationButton from './AddLocationButton'

const Location = () => {
    const [locations, setLocations] = useState([])
     
    useEffect(() => {
        fetch('http://localhost:3004/locations')
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])

    const allLocations = locations.map(l => {
        return (
        <div key={l.id}>
            <h3 style={{marginLeft: "5px"}}>{l.name}</h3>
            <p style={{marginLeft: "25px"}}>Address: {l.address1}</p>
            <p style={{marginLeft: "95px"}}>  {l.address2}</p>
            <hr />
        </div>
        )
    })
    
    const handleLocationSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
   

    return(
        <div>
            <h1>Hello from Location Page</h1>
        <AddLocationButton />
        {allLocations}
        
        </div>
    )
}

export default Location