import React from 'react'
import EsetNod from './EsetNod.css';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Draggable from 'react-draggable';
import {Button, } from "@material-ui/core";
import { HiddenContext, } from './HiddenContext';
const EsetNode=(props)=> {

const[hideEset, setHideEset]= React.useState(false) 
const[showLoadingBar, setShowLoadingBar]= React.useState(false) 

function handleClick12 ()
{setHideEset(true) } 

    return (
         
     
               <Draggable>                                  
        <div className='esetNod'>
      
            <div className='esetNod__container'>
             <img src='./images/eset32.png' />
             <div className="esetNod__icons">
              <MinimizeIcon />
              <FullscreenIcon />             
              <CloseIcon onClick={props.closeEset}className='exit' />
              </div>             
              </div>
              <div className='esetNod__fixButton'>                         
              <img className='left__Image' src="images/nod.png" />
              <img className='eset__Image' src="images/esetpic.png" />             
              <img  className='right__Image' src="images/nodd.png" />

             </div>   
           
                     {!hideEset &&   
              <div className='esetNod__info'>  

                <h3>EsetNod has found 32 issues in your system</h3>
                <h4>Click on to the fix button to fix issues</h4>
                <Button onClick={handleClick12} className='fix__button'variant='outlined'>Fix issue</Button>
              </div>
                 } 
              
              
       </div>
                      
       </Draggable>
        
    )
}

export default EsetNode;
