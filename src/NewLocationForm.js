import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'

function NewLocationForm() {
    const [newLocation, setNewLocation] = useState({
        name: '',
        address1: '',
        address2: ''
    })
  
    const handleChange = (e) => {
        setNewLocation({
            ...newLocation, [e.target.name]: e.target.value
        })
    }
 
    console.log(newLocation)
    const formStyles = {

        color: "white",
        background: "#2F4F4F",
        borderBottom: "25px solid #2F4F4F",
        borderTop: "25px solid #2F4F4F",
        borderLeft: "35px solid #2F4F4F",
        borderRadius: "15px"
    }
    const inputStyles = {
        border: "2px solid teal",
        borderRadius: "5px",
        width: "350px"
    }

 

    return (
        <MyConsumer>
            {context => 
            <div>
                <form onSubmit={context.handleLocationSubmit} style={formStyles}>
                    <label>Location Name: </label><br/>
                    <input name="name" onChange={handleChange}type="text" style={inputStyles}/><br/>
                    <br/>
                    <label>Address Line 1: </label><br/>
                    <input name="address1" onChange={handleChange}type="text" style={inputStyles}/><br/>
                    <label>Address Line 2:</label><br/>
                    <input name="address2" onChange={handleChange}type="text" style={inputStyles}/><br/>
                    <input type="submit"/>
                </form> 
            </div>
            }
            
        </MyConsumer>
    )
}

export default NewLocationForm