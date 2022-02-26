import React, { useState } from "react"
import { MyConsumer } from './MyContext'


function Game(props) {

    console.log(props.game)
    const [scores, setScores] = useState({
        homeScore: "",
        guestScore: "",
        played: true
    })

    const [showFormStyle, setShowFormStyle] = useState('none')
    
    const toggleForm = (e) => {
        console.log(e)
        let newStyle= showFormStyle == 'none' ?  '' :  'none'
        setShowFormStyle(newStyle)
     }

    const handleChange = (e) => {
        console.log(scores)
        setScores({
            ...scores, 
            [e.target.name]: e.target.value
        })
    }

 
    const handleSubmit = (e) => {
        e.preventDefault()

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
        .then(window.location.reload(false))
    }
return(
    <div>
    <h3 style={{marginLeft: "5px"}}>{props.game.guest} {props.game.guestScore} @ {props.game.home} {props.game.homeScore}</h3>
            <button onClick={toggleForm}>Add Scores</button>
                <form name={props.id} style={{display: showFormStyle}} onSubmit={handleSubmit}>
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