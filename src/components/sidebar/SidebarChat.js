import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css'

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h4>Room Name</h4>
            <p>How are you bro?</p>
        </div>
    </div>
  )
}

export default SidebarChat