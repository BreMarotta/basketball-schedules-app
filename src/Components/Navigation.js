import React from 'react';
import { NavLink } from "react-router-dom";
import { MyConsumer } from './MyContext'

const Navigation = () => {
    const linkStyles = {
        marginLeft: "15px",
        color: "gray"
    }

    return(
    <div
      style={{
        background: '#2F4F4F',
        borderTop: "10px solid #2F4F4F",
        borderBottom: "10px solid #2F4F4F",
        paddingBottom: "10px"
      }}
      
    >
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/" exact>
        Home
      </NavLink>
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/locations" exact>
        Locations
      </NavLink>
      <NavLink style={linkStyles} activeStyle={{color: "white"}}to="/schedule">
        Full Schedule
      </NavLink> 
      <MyConsumer>
            {context => 
            <div></div>
                // <button style={{marginRight: "75px",float: "right"}} onClick={context.toggleGames}>Click Me!</button>
            }
        </MyConsumer>
    </div>
    )
}

export default Navigation