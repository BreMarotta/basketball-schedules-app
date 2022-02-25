import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'
import AddLocationButton from './AddLocationButton'

const Location = () => {

   

    return(
        <div>
            <h1>Hello from Location Page</h1>
        <AddLocationButton />
        <MyConsumer>
            {context => 
            <div>
                <div>{context.allLocations}</div>
            </div>
            }
            
        </MyConsumer>
        </div>
    )
}

export default Location