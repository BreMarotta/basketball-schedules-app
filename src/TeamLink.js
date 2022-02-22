import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TeamLink = (props) => {

    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    console.log(props)
    return (
        <Link to={`/schedule/${props.team}`}>
            <button style={linkStyles}>{props.team}</button>
        </Link>
    )
}


export default TeamLink