import React, { useState, useEffect, useCallback } from 'react' 

function NewGameForm({ teams }) {
    const [newGame, setNewGame] = useState({
        home: '',
        guest: '',
        location: '',
        date: '',
        time: '',
        played: false
    })
    console.log(teams)

    const handleChange = (e) => {
        setNewGame({
            ...newGame, [e.target.name]: e.target.value
        })
    }

    const formStyles = {

        color: "white",
        background: "#2F4F4F",
        borderBottom: "25px solid #2F4F4F",
        borderTop: "25px solid #2F4F4F",
        borderLeft: "35px solid #2F4F4F",
        borderRadius: "15px"
    }
    const inputStyles = {
        border: "2px solid teal",
        borderRadius: "5px",
        width: "350px"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyles}>
                <label>Home Team: </label><br/>
                <select id ="home" name="home" onChange={handleChange}type="text" style={inputStyles}><br/>
                    <option value="Vikings">Vikings</option>
                    <option value="Plum">Plum</option>
                </select>
                <br/>
                <label>Visiting Team: </label><br/>
                <input name="guest" onChange={handleChange}type="text" style={inputStyles}/><br/>
                <label>Location:</label><br/>
                <input name="location" onChange={handleChange}type="text" style={inputStyles}/><br/>
                <label>Date:</label><br/>
                <input name="date" onChange={handleChange}type="text" style={inputStyles}/><br/>
                <label>Time:</label><br/>
                <input name="time" onChange={handleChange}type="text" style={inputStyles}/><br/><br/>
                <input type="submit"/>
            </form> 
        </div>
    )
}

export default NewGameForm

{/* <select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> */}