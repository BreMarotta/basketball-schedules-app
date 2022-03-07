import React, { useContext } from "react"
import { MyContext } from './MyContext'
import TeamLink from './TeamLink'
import Game from './Game'


function Schedule() {
    const {games, showAll, teams, setGames} = useContext(MyContext)

    const updateGameScore = (game) => {
        const newGame = games.map(g => g.id == game.id ? game : g)
        setGames(newGame)
    }


    const displayGames = showAll == true ? games : games.filter(game => game.played != true)

return(
    <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
        <br/>
            <div>
                <div>{teams.map(t => 
                    <TeamLink key={t.id}id={t.id}team={t.team}/>)}</div>
                <div>{displayGames.map(game =>
                    <Game key={game.id} game={game} updateGameScore={updateGameScore}/>)}</div>
            </div>

    </div>
)
}
export default Schedule