import React, { useContext } from 'react' 
import { MyContext } from './MyContext'
import Game from './Game'

const Team = (props) => {
    const {games, showAll, teams} = useContext(MyContext)
    const team=(teams[props.match.params.id])   
    const teamName =team.team

    const teamGames = games.filter(game => game.home == teamName || game.guest == teamName)

    const displayGames = showAll == true ? teamGames : teamGames.filter(game => game.played != true)

    return(
        <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
            <p style={{color: "white", background: "black"}}>{teamName}</p>       
            <div>{displayGames.map(game => <Game key={game.id} game={game} style={"team"}/>)}</div>  
        </div>
    )
}

export default Team