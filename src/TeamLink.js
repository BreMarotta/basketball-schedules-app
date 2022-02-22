import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TeamLink = ({ childName }) => {
    const [teams, setTeams] = useState ([])
    const [upward, setUpward] = useState ("")
    const [teamSchool, setSchool] = useState ("")

    
    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

    const teamsList = teams.filter(t => t.child === childName)
    console.log(teamsList)
    
    const linkStyles = {
        marginRight: "10px",
        color: "white",
        background: "black"
    }

    return (
        <Link to={`/schedule/${childName}/${upward}`}>
            <button style={linkStyles}>ok</button>
        </Link>
    )
}


export default TeamLink