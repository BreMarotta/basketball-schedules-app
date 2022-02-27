import React, { useState, useEffect, useCallback } from 'react' 

const MyContext = React.createContext()

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
        // displayGames.map(game => <Game key={game.id} game={game}/>)  
        }
    return (
        <MyContext.Provider value={{
            teams: teams,
            games: games,
            filterGames: filterGames,
            showGames: showGames
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

