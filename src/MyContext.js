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
            <h3 style={{marginLeft: "5px"}}>{game.guest} @ {game.home}</h3>
            <a style={{marginLeft: "25px"}}>Location: {game.location}</a>
            <a style={{marginLeft: "25px"}}> Time: {game.time}</a>
            <a style={{marginLeft: "25px"}}>{game.date}</a>
            <hr />
        </div>
        )
    })

    // const teamGames = (team) => {
    //     games.map(game => {
    //         console.log(game)
    //         if(team === game.home || game.guest){
    //             return (
    //                 <div key={game.id}>
    //                     <h3 style={{marginLeft: "5px"}}>{game.guest} @ {game.home}</h3>
    //                     <a style={{marginLeft: "25px"}}>Location: {game.location}</a>
    //                     <a style={{marginLeft: "25px"}}> Time: {game.time}</a>
    //                     <a style={{marginLeft: "25px"}}>{game.date}</a>
    //                     <hr />
    //                 </div>
    //                 )
    //         }
    //     })
    // }

    const [teams, setTeams] = useState ([])

    useEffect(() => {
        fetch('http://localhost:3004/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])
 
    const [locations, setLocations] = useState([])
     
    useEffect(() => {
        fetch('http://localhost:3004/locations')
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])

    // const filter = (teamName) => {
    //     const filteredGames = games.filter(g => {
    //         teamName === g.home || g.guest
    //             return (
    //                 <div key={g.id}>
    //                     <h3>{g.guest} @ {g.home}</h3>
    //                     <a>Location: {g.location}</a>
    //                     <a> Time: {g.time}</a>
    //                     <a>{g.date}</a>
    //                     <hr />
    //                 </div>
    //             )
    //         })
    //     }
    
    
    console.log(games)

    return (
        <MyContext.Provider value={{
            allGames: allGames,
            teams: teams,
            locations: locations,
            games: games
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }

