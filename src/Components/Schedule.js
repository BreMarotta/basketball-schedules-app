import React, { useState, useEffect } from "react"
import { MyConsumer } from './MyContext'
import TeamLink from './TeamLink'
import Game from './Game'


function Schedule() {
    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

return(
    <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
        <br/>
        <MyConsumer>
            {context => 
            <div>
                <div>{teams.map(t => 
                    <TeamLink key={t.id}team={t.team}/>)}</div>
                <div>{context.games.map(game =>
                    <Game key={game.id} game={game}/>)}</div>
            </div>
            }
        </MyConsumer>
    </div>
)
}
export default Schedule