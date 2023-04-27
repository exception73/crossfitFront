import React from 'react'
import "./MessagesCard.css"

const MessagesCard = ({message, index}) => {
    if(!(index&1)){
      return ( 
        <div className="message-card message-card-left" >
        
        {message}

        </div>)
    }
  return (
    <div className= "message-card message-card-right">
        
        {message}

    </div>
  )
}

export default MessagesCard