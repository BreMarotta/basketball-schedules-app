import React, { useContext } from 'react' 
import { MyContext } from './MyContext'
import Game from './Game'

const Team = (props) => {
    const {games} = useContext(MyContext)
    const teamName=(props.match.params.name)

    const teamGames = games.filter(game => game.home == teamName || game.guest == teamName)

    return(
        <div style={{paddingLeft: "35px", paddingRight: "50px"}}>
            <p style={{color: "white", background: "black"}}>{teamName}</p>       
            <div>{teamGames.map(game => <Game key={game.id} game={game}/>)}</div>  
        </div>
    )
}

export default Team