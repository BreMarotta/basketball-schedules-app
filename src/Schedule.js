import React, { useState, useEffect } from "react"
import { MyConsumer } from './MyContext'
import Team from './Team'
import TeamLink from './TeamLink'
import AddGameButton from './AddGameButton'


function Schedule() {
    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

const teamsList = teams.map(t => <TeamLink key={t.id}team={t.team}/>)
return(
    <div>
        {teamsList}
        <br/>
        <AddGameButton />
        <MyConsumer>
            {context => 
            <div>
                <div>{context.allGames}</div>
            </div>
            }
            
        </MyConsumer>

    </div>
)
}
export default Schedule