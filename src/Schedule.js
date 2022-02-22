import React, { useState, useEffect } from "react"
import { MyConsumer } from './MyContext'
import Child from './Child'
import TeamLink from './TeamLink'


function Schedule() {
    const [schedule, setSchedule] = useState([])
    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

const teamsList = teams.map(t => <TeamLink key={t.id}team={t.team}/>)
//console.log(teamsList)
return(
    <div>
        {teamsList}
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