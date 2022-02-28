import React, { useState, useEffect, useContext } from "react"
import { MyContext } from './MyContext'
import TeamLink from './TeamLink'
import Game from './Game'


function Schedule() {
    const {games, showAll} = useContext(MyContext)
    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

    const displayGames = showAll == true ? games : games.filter(game => game.played != true)

return(
    <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
        <br/>
            <div>
                <div>{teams.map(t => 
                    <TeamLink key={t.id}team={t.team}/>)}</div>
                <div>{displayGames.map(game =>
                    <Game key={game.id} game={game}/>)}</div>
            </div>

    </div>
)
}
export default Schedule