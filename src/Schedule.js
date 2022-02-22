import React, { useState, useEffect } from "react"
import Child from './Child'


const Schedule = () => {
    const [schedule, setSchedule] = useState([])
    



useEffect(() => {
    fetch('http://localhost:3004/games')
    .then(res => res.json())
    .then(data => setSchedule(data))
}, [])

//console.log(schedule)
// const teamsList = teams.map(t => {
//     return (
//         <div>
//             <ChildLink teamA={t.teamA} teamB={t.teamB} child={t.child}/>
//         </div>
//         )})

const fullSchedule = schedule.map(game => {
    return (
    <div>
        <h3>{game.guest} @ {game.home}</h3>
        <a>Location: {game.location}</a>
        <a> Time: {game.time}</a>
        <a>{game.date}</a>
        <hr />
    </div>
    )
})
    return (
        <div>
            <h1>Schedule of All Games</h1>
            {/* {teamsList} */}
            {fullSchedule}
            
        </div>
    )
}

export default Schedule