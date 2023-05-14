import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import { Input } from '@mui/base';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://lh3.googleusercontent.com/a/AGNmyxZ9AVh9W1yvnE0eya2GJsjMeJA2LlykPS3Fx7k0Ug=s96-c-rg-br100' />
        <div className='sidebar_headerRight'>
         <IconButton>
          <DonutLargeIcon />
         </IconButton>
         <IconButton>
          <ChatIcon />
         </IconButton>
         <IconButton>
          <MoreVertIcon />
         </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchcontainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar__chat'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )   
}

export default Sidebar