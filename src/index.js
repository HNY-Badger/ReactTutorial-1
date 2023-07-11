import React from 'react';
import ReactDOM from 'react-dom/client';

const helpText="HElp meee"

const inputClick = ()=>console.log("dfs")
const mouseOver =()=>console.log("gfds")
const element = (<div className="ff">
                    <h1>{helpText}</h1> <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver}/>
                <p>{helpText==="HElp meee"?'YEs':'No'}</p>

                </div>
                    )
const app = document.getElementById("app")
ReactDOM.render(element,app)