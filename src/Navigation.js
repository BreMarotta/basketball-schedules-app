import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
      <NavLink style={{ marginRight: "10px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/schedule">
        Full Schedule
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/schedule/:team">
        Team
      </NavLink>
      
    </div>
    )
}

export default Navigation