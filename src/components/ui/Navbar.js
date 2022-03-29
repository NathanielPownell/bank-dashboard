import React, { useState } from 'react'
import "./Navbar.css"
import Hamburger from './Hamburger'
import userimg from './user.jpg'
import { Home, Settings, Person, Phone, PersonSharp, CoPresentOutlined, ChatBubble, CompassCalibration, Explore, ExitToApp } from '@mui/icons-material'

const Navbar = () => {
  const [toggleHam, setToggleHam] = useState(false)

  const handleClick = () => {
    setToggleHam(!toggleHam)
  }
  return (
    <div className='navbar'>
      <div className='userActions'>
        <div className='button desktop'> <ExitToApp /> Log Out </div>
        <img className='userimg' src={userimg} />
      </div>
      <div className='desktopTray desktop'>
        <div className='logo desktop'>Bank.io</div>
        <div className='trayNav desktop'>
          <div className='activeNav'> <Home /> Home</div>
          <div> <Settings /> Settings</div>
          <div> <CoPresentOutlined /> Account</div>
          <div> <Person /> Profile</div>
          {/* <div className='divider'></div> */}
          <hr />
          <div> <Explore /> Explore</div>
          <div> <ChatBubble /> Feedback</div>
          <div> <Phone /> Support</div>

        </div>
      </div>
      <div className='tablet'>
        <Hamburger toggleHam={toggleHam} setToggleHam={setToggleHam} handleClick={handleClick} />
        <div className='logo mobile'>Bank.io</div>
        {/* <div className='logo desktop'>Bank.io</div> */}
      </div>
      {/* <img className='userimg mobile' src={userimg} /> */}
    </div>

  )
}

export default Navbar