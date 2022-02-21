import React, { useState, useEffect } from "react"
import TeamLink from './TeamLink'

const Schedule = () => {
    const [games, setGames] = useState([])

useEffect(() => {
    fetch('http://localhost:3004/games')
    .then(res => res.json())
    .then(data => {
        setGames(data)
    })
}, [])

const teamsList = games.map(g => <TeamLink team={g.team}/>)

// const displayGames = teams.map(g => {
//     <h1>{g.location}</h1>
// })
    return (
        <div>
            <h3>Schedule of All Games</h3>
            {teamsList}
        </div>
    )
}

export default Schedule