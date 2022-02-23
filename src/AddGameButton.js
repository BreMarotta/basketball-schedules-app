import React from 'react'
import { Link } from 'react-router-dom'

const AddGameButton = ({ teamsList }) => {
    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    console.log(teamsList)
    return (
        <Link to={'/schedule/new'}>
            <button style={linkStyles}>Add Game to Schedule</button>
        </Link>
    )
}

export default AddGameButton