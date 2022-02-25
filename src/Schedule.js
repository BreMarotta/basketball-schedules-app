import React from "react"
import { MyConsumer } from './MyContext'
import TeamLink from './TeamLink'


function Schedule() {
    
return(
    <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
        <br/>
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