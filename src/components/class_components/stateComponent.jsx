import React from "react"
class StateComponent extends React.Component {
    constructor(){
        super()
        this.state={
            name:"Vamsheni",
            course:"ECE"
        }
    }
    changeState=() => {
        console.log("Vamsheni Kathiresan")
        
}
changeState_2=() => {
    console.log("Vamsheni Vanitha")
    
}
    
    render() {
        return (
            <div>
                <h1>this is state component</h1>
                <h2>Hello,{this.state.name}  {this.state.course} </h2>
                <h3>changing the state {this.state.name} to {this.changeState()} {this.changeState_2}</h3>
                <button onMouseOver={this.changeState}>click me to change the state</button>
                <button onMouseOver={this.changeState_2}>click me to change the state</button>
            </div>
            
        )
    }
}
export default StateComponent