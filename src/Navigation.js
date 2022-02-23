import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const linkStyles = {
        marginRight: "20px",
        color: "gray"
    }
    return(
    <div
      style={{
        background: 'black',
        borderTop: "10px solid black",
        borderBottom: "10px solid black",
        paddingBottom: "10px"
      }}
      
    >
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/" exact>
        Home
      </NavLink>
      <NavLink style={linkStyles} activeStyle={{color: "white"}} to="/rules" exact>
        League Rules
      </NavLink>
      <NavLink style={linkStyles} activeStyle={{color: "white"}}to="/schedule">
        Full Schedule
      </NavLink>   
    </div>
    )
}

export default Navigation