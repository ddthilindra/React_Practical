import React, { Component } from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello ddthilindra</h1>
    //     </div>
    // )

    return React.createElement('div',
    {id: 'Hello',className:'dummyClass'},
     React.createElement('h1',null,'Hello ddthilindra'))
}

export default Hello