import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const helpText="H text"

const onInputClick = ()=>console.log("click")
const onMouseOver =()=>console.log("over")
const elements = (<div className="ff">
  <h1>{helpText}</h1>
  <input placeholder={helpText} onClick={onInputClick} onMouseEnter={onMouseOver}/>
  <p>{helpText ==="H text"?'Yes':'No'}</p>
</div>)


const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(elements)