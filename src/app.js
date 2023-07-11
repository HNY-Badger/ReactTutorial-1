import React from 'react';
import Header from './components/header';
import Image from './components/image';
import apple from "./img/apple.jpg"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text",
            userData: ""
        }

        // this.onInputClick = this.onInputClick.bind(this) Not necessary, working without binding
    }
    

    onInputClick = ()=> {
        this.setState({helpText: "Changed"})
        console.log("Clicked")
    }

    onMouseOver =()=>console.log("over")

    render() {
        return (<div className="name">
            <Header title="Header"/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                onChange={e => this.setState({userData: e.target.value})}
                onClick={this.onInputClick} 
                onMouseEnter={this.onMouseOver}/>
            <p>{this.state.helpText ==="H text"?'Yes':'No'}</p>
            <Image image={apple}/>
            <img src={apple}/>
        </div>)
    }
}

export default App