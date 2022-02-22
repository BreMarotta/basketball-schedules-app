import React from 'react' 
import { MyConsumer } from './MyContext'

function TestContext() {
    return (
        <MyConsumer>
            {data => 
                <h1>{data.games.home}</h1>
 
            }
            
        </MyConsumer>
    )
}

export default TestContext