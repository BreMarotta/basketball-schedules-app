import React, { useEffect } from 'react' 
import { MyConsumer } from './MyContext'
import Game from './Game'

const Team = (props) => {
    
    const teamName=(props.match.params.id)
    console.log(teamName)

    // const filterGames = (games) => {
    //     console.log("Hi from filterGames")
    //     const displayGames = games.filter(game => game.home == teamName || game.guest == teamName)
    //     console.log(displayGames)
    //     displayGames.map(game => <Game key={game.id} game={game}/>)  
    //     }

        // useEffect(() => {
        //     displayGames.map(game => <Game key={game.id} game={game}/>) 
        // }, [])
        
    //console.log(displayGames)
    return(
        <div>
            <h4 style={{paddingLeft: "35px", paddingRight: "50px"}}>{teamName}</h4>
            <MyConsumer>
                {context => {
                    <div>
                        <div>{context.filterGames}</div>
                        <div>{context.showGames.map(game => <Game key={game.id} game={game}/>)}</div>
                    </div>
                }}
            </MyConsumer>
            
    </div>
    )
}

export default Team