import React, { useState } from 'react' 
import TeamLink from './TeamLink'

const Child = (props) => {
    
    const childName=(props.match.params.id)
    console.log(childName)

    return(
        <div>
            <TeamLink childName={childName}/>
            <h1>Where is Child Rendering?
            </h1>
        </div>
    )
}

export default Child