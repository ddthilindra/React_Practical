import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'
import childComponent from './ChildComponent'

class parentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert('Hello ' + this.state.parentName + 'From' + this.state.childName)
    }
    
    render() {
        return (
            <div>
                <childComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default parentComponent
