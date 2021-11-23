import React,{Component} from "react";
import reactDom from "react-dom";

class Componente extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}
    }
    clickHandler(){
      this.setState((prevState,props) => {
        return {count: prevState.count + 1}
      })
    }
    render(){
        return <button onClick = { () => {this.clickHandler()}}>{this.state.count}</button>
    }
}
  
    class Detalle extends React.Component{
      render(){
        return <h1>{this.props.details}</h1>
      }
    }
    class Button extends React.Component{
        render(){
            return (
              <button style = {{color: this.props.active? 'red': 'blue'}} 
                            onClick={() => {this.props.clickHandler(this.props.id,this.props.name)}}>
                {this.props.name}
              </button>
            )
        }
    }
    class App extends React.Component{
        constructor(props){
            super(props)
            this.state = {activeArray:[0,0,0,0], details:""}
            this.clickHandler = this.clickHandler.bind(this)
        }
        clickHandler(id,details){
            var arr = [0,0,0,0]
            arr[id] = 1
            this.setState({activeArray:arr,details:details})
            console.log(id,details)
        }
        render(){
          
var element = [] 
var array = [1,2,3,4,5]

for(let i = 0; i < array.length; i++){
   element.push(<li>y {array[i]}</li>)
}
            return (
              
                <div>
         
                    <Button id = {0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="Prop1"/>
                    <Button id = {1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="Prop2"/>
                    <Button id = {2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="Prop3"/>
                    <Button id = {3} active = {this.state.activeArray[3]} clickHandler = {this.clickHandler} name="Prop4"/>
                    <Detalle details = {this.state.details}/>
                </div>


            )
        }
    }

export default App;