import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'

const Location = (props) => {
    const locationName=(props.match.params.id)
   

    return(
        <div>
            <h1>Hello from Location page</h1>
        </div>
    )
}

export default Location