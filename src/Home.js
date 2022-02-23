import React from 'react';
import LocationLink from './LocationLink'
import { MyConsumer } from './MyContext'

const Home = () => {
    return(
        <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
            <h4>Mission Statement</h4>
            <h5>The Westmoreland County Elementary School Basketball League has been created to provide public and private high schools throughout the Westmoreland County area an opportunity to have their feeder programs  play in a league that is designed for a higher level of competitive basketball. Integrity, respect and sportsmanship are at the highest priority of this league</h5>
            <hr/>
            <MyConsumer>
            {context => 
            <div>
                <div>{context.locations.map(l => <LocationLink key={l.name} location={l.name}/>)}</div>
            </div>
            }
            
        </MyConsumer>
            
        </div>
    )
}

export default Home