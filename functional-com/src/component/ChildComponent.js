import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={ () =>props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default childComponent
