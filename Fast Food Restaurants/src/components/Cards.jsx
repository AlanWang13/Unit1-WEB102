import './Cards.css';
import React from "react";

function Cards(props){
    return(
        <div className='cards'>
            <div className='image'>
                <img src={props.img_url}/>
            </div>
            <div className='name'>
                <h2>{props.name}</h2>
            </div>
            <div className='genre'>
               <h4>Type: {props.genre}</h4> 
            </div>
            <div className='link'>
                <button>
                    <a href={props.link}>Visit Page</a>
                </button>
            </div> 
        </div>
    )
}

export default Cards