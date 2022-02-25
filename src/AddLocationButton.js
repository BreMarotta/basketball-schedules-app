import React from 'react'
import { Link } from 'react-router-dom'

const AddLocationButton = ({ teams }) => {
    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }
    
    return (
        <Link to={'/location/new'}>
            <button style={linkStyles}>Add Location to League</button>
        </Link>
    )
}

export default AddLocationButton