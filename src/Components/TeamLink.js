import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = (props) => {


    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    return (
        <Link to={`/schedule/${props.id}`}>
            <button style={linkStyles}>{props.team}</button>
        </Link>
    )
}


export default TeamLink