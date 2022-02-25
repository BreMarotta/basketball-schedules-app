import React from 'react'
import { Link } from 'react-router-dom'

const LocationLink = (props) => {

    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    return (
        <Link to={`/${props.location}`}>
            <button style={linkStyles}>{props.location}</button>
        </Link>
    )
}


export default LocationLink