import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { MyContext } from './MyContext'

const Navigation = () => {
  const {toggleGames, showAll} = useContext(MyContext)
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
      <div style={{marginRight: "75px",float: "right"}} >
        <a>Switch to Show: </a>
        <button onClick={toggleGames}>{showAll ? "Upcoming Games" : "All Games"}</button>
      </div>
      

    </div>
    )
}

export default Navigation