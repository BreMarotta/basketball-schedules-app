import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = (props) => {
    return (
        <Link to={`/schedule/${props.team}`}>
            <button>{props.team}</button>
        </Link>
    )
}

export default TeamLink