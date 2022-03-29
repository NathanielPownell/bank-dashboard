import React, { useState } from 'react'
import './Card.css'
import { AccessAlarm } from '@mui/icons-material';

const Card = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div onClick={handleClick} className={`card ${props.type ? props.type : ""} ${isActive ? "activeCard" : ""}`}>
      <div className='cardTitle'>{props.title}
      
        {props.type == "credit" &&
          <div>
          <AccessAlarm />

          </div>
        }
      </div>
        {props.children}
    </div>
  )
}

export default Card