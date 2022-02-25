import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'

const Location = () => {

   

    return(
        <div>
            <h1>Hello from Location Page</h1>
        
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