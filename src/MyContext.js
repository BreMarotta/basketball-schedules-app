import React, { useState, useEffect } from 'react' 

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [games, setGames] = useState([{}])
    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    // const dateSortedGames = games.sort((dateA, dateB) => new Date(dateA) - new Date(dateB))
    // console.log(dateSortedGames)

    const allGames = games.map(game => {
        return (
        <div key={game.id}>
            <h3 style={{marginLeft: "15px"}}>{game.guest} @ {game.home}</h3>
            <a style={{marginLeft: "25px"}}>Location: {game.location}</a>
            <a style={{marginLeft: "25px"}}> Time: {game.time}</a>
            <a style={{marginLeft: "25px"}}>{game.date}</a>
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

