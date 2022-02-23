import React, { useState, useEffect } from 'react' 

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [games, setGames] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3004/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    const allGames = games.map(game => {
            return (
            <div key={game.id}>
                <h3>{game.guest} @ {game.home}</h3>
                <a>Location: {game.location}</a>
                <a> Time: {game.time}</a>
                <a>{game.date}</a>
                <hr />
            </div>
            )
        })
    
    // const filteredGames = games.map(g => {
    //     if(g.home === team) {
    //         return (
    //             <div key={g.id}>
    //                 <h3>{g.guest} @ {g.home}</h3>
    //                 <a>Location: {g.location}</a>
    //                 <a> Time: {g.time}</a>
    //                 <a>{g.date}</a>
    //                 <hr />
    //             </div>
    //         )
    //     }
    // })
    

    return (
        <MyContext.Provider value={{
            allGames: allGames
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

