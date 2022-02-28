import React, { useState, useEffect, useCallback } from 'react' 

export const MyContext = React.createContext()

const MyProvider = (props) => {
    const [games, setGames] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3004/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

    const [showGames, setShowGames] = useState([{}])
 
    const filterGames = (team) => {
        console.log("Hi from filterGames")
        const displayGames = games.filter(game => game.home == team || game.guest == team)
        setShowGames(displayGames)
        console.log(showGames)
        // displayGames.map(game => <Game key={game.id} game={game}/>)  
        }

    const displayAllGames = games
    const displayUpcomingGames = games.filter(game => game.played != true)
    // console.log(displayAllGames)
    // console.log(displayUpcomingGames)

    // const [showAll, setShowAll] = useState(true)
    // const toggleGames = () => {
    //     setShowAll(!showAll)
    //     console.log(showAll)
    //     //let displayGames = games.filter(game => game.played != true
        // showAll = "false" ? setGames(displayAllGames) : setGames(displayUpcomingGames)
   
    // }

    return (
        <MyContext.Provider value={{
            games: games,
            teams: teams,
            showGames: showGames,
            // toggleGames: toggleGames,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

