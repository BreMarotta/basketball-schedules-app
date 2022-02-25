import React, { useState } from 'react' 
import { MyConsumer } from './MyContext'

const Location = () => {

   

    return(
        <div>
            <h1>Hello from Location Page</h1>
        </div>
        // <MyConsumer>
        //     {context => 
        //     <div>
        //         <div>{context.locations.map(l => <LocationLink key={l.name} location={l.name}/>)}</div>
        //     </div>
        //     }
            
        // </MyConsumer>
    )
}

export default Location