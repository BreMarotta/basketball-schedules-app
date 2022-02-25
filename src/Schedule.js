import React, { useState, useEffect } from "react"
import { MyConsumer } from './MyContext'
import Team from './Team'
import TeamLink from './TeamLink'
import AddGameButton from './AddGameButton'


function Schedule() {
    
return(
    <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
        <br/>
        <AddGameButton />
        <MyConsumer>
            {context => 
            <div>
                <div>{context.teams.map(t => <TeamLink key={t.id}team={t.team}/>)}</div>
                <div>{context.allGames}</div>
            </div>
            }
            
        </MyConsumer>
        

    </div>
)
}
export default Schedule