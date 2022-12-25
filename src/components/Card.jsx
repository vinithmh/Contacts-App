import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Card(props){
    return(
      <div className='card'>
      <div className='top'>
      <h2 className='name'>
          {
            props.name
          }
        </h2>
        <Avatar photo={props.photo}/>
        </div>
        <div className='bottom'>
        <Detail detailInfo={props.age}/>
        <Detail detailInfo={props.gender}/>
        <Detail detailInfo={props.company}/>
        <Detail detailInfo={props.email}/>
        
        </div>
        
      </div>
    );
  }

  export default Card;