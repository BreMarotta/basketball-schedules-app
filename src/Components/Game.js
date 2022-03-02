import React, { useState } from "react"
import { MyContext } from './MyContext'

function Game(props) {
    const playedStatus = props.game.played === false ? "" : "hidden"
    const backgroundColor = props.game.played === false ? "whitesmoke" : "#5F9EA0"
    const teamPage = props.style ? "none" : ""
    
    const [scores, setScores] = useState({
        homeScore: "",
        guestScore: ""
    })

    const [showFormStyle, setShowFormStyle] = useState('none')
    
    const toggleForm = () => {
        let newStyle= showFormStyle == 'none' ?  '' :  'none'
        setShowFormStyle(newStyle)
     }

    const handleChange = (e) => {
        console.log(scores)
        setScores({
            ...scores, 
            [e.target.name]: e.target.value,
            played: true
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(scores)
        console.log(e.target.name)
        debugger
        const configurationObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(scores),
        };
        fetch(`http://localhost:3004/games/${e.target.name}`, configurationObject)
        .then(res => res.json())
        .then(window.location.reload(true))
    }

return(
    <div style={{background: backgroundColor, paddingTop: "1.5px"}}>
    <h3 style={{marginLeft: "5px"}}>{props.game.guest} {props.game.guestScore} @ {props.game.home} {props.game.homeScore}</h3>
            <button style={{visibility: playedStatus, display: teamPage}} onClick={toggleForm}>Add Scores</button>
                <form name={props.game.id} style={{display: showFormStyle}} onSubmit={handleSubmit}>
                    <label>Home Team Score: </label>
                    <input name="homeScore" type="text" onChange={handleChange}/><br/>
                    <label>Visiting Team Score: </label>
                    <input name="guestScore" type="text" onChange={handleChange} /><br/>
                    <input type="submit"/>
                </form>
            
            <a style={{marginLeft: "25px"}}>Location: {props.game.location}</a>
            <a style={{marginLeft: "25px"}}> Time: {props.game.time}</a>
            <a style={{marginLeft: "25px"}}>{props.game.date}</a>
            <hr />
    </div>
)
}
export default Game