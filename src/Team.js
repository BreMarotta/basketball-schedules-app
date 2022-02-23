import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'

const Team = (props) => {
    
    const teamName=(props.match.params.id)

    return(
        <div>
            <h1>{teamName}</h1>
        </div>
    )
}

export default Team