import React from 'react' 
import { MyConsumer } from './MyContext'

const Team = (props) => {
    
    const teamName=(props.match.params.id)
    console.log(teamName)

    return(
        <div>
            <h4>{teamName}</h4>
            <MyConsumer>
                {context => 
                <div>
                    {context.allGames.filter(g => {
                        if(teamName != g.guest || g.home)
                        return (
                            <div key={g.id}>
                                <h3>{g.guest} @ {g.home}</h3>
                                <a>Location: {g.location}</a>
                                <a> Time: {g.time}</a>
                                <a>{g.date}</a>
                                <hr />
                            </div>)})}
                </div>
                }
                 

            </MyConsumer>
    </div>
    )
}

export default Team