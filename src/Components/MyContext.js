import React, { useState, useEffect, useCallback } from 'react' 

export const MyContext = React.createContext()

const MyProvider = (props) => {
    const [games, setGames] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3004/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    const [showAll, setShowAll] = useState(true)
    const toggleGames = () => {
        setShowAll(!showAll)
    }

    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

    return (
        <MyContext.Provider value={{
            games: games,
            toggleGames: toggleGames,
            showAll: showAll,
            teams: teams
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

