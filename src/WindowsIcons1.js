import React from 'react'
import "./WindowsIcons1.css"
import {	
    BrowserRouter as Router,
    Route, Link
  } from "react-router-dom";

function WindowsIcons1() {
    return (

      
        <div className="windows__iconsBot">
         
      
          <Router>
            <Link className="windows__icon1" 
              onClick={() => {
                window.location.href = 'https://github.com/Ajnur3321/WIN-7';
                  }}>
                    <img src="./icons/icons8-github-48.png"/>
                      <figcaption>Github</figcaption>
                        </Link>
                          </Router>

          <Router>
            <Link className="windows__icon1" 
              onClick={() => {
                window.location.href = '/icons/Web Resume1.pdf';
                  }} >
                    <img src="./icons/icons8-microsoft-word-48.png"/>
                      <figcaption>Resume</figcaption>
                        </Link>
                          </Router>
                              </div>
   
    
    )

    
}

export default WindowsIcons1
