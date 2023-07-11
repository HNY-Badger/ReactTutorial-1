import React from 'react';
import Header from './components/header';
import Image from './components/image';
import apple from "./img/apple.jpg"

class App extends React.Component {
  onInputClick = ()=>console.log("click")
  onMouseOver =()=>console.log("over")

  helpText="H text"

  render() {
    return (<div className="name">
      <Header title="Header"/>
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText} onClick={this.onInputClick} onMouseEnter={this.onMouseOver}/>
      <p>{this.helpText ==="H text"?'Yes':'No'}</p>
      <Image image={apple}/>
      <img src={apple}/>
  </div>)
  }
}

export default App