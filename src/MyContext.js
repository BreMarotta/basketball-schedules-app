import React, { useState, useEffect } from 'react' 

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/games')
        .then(res => res.json())
        .then(data => {
            setGames(data)
        })
    }, [])

    return (
        <MyContext.Provider value = {{
            games: games
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

