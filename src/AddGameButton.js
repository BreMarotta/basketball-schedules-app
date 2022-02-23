import React from 'react'
import { Link } from 'react-router-dom'

const AddGameButton = ({ teams }) => {
    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    console.log(teams)
    return (
        <Link to={'/schedule/new'}>
            <button style={linkStyles}>Add Game to Schedule</button>
        </Link>
    )
}

export default AddGameButton