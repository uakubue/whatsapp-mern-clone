import { Avatar } from '@mui/material';
import React from 'react';
import './Chat.css';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import { InsertEmoticon } from '@mui/icons-material';
import { Mic } from '@mui/icons-material';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src='https://lh3.googleusercontent.com/a/AGNmyxb28TIxxW_Rm-jdj2Aj9UZjiCCc-jKz81C6Qoqk0g=s96-c-rg-br100' />
        <div className='chat__headerInfo'>
          <h4>Room name</h4>
          <p>{new Date().toUTCString()}</p>
        </div>
        <div className='chat__headerRight'>
        <IconButton>
          <SearchOutlined />
         </IconButton>
         <IconButton>
          <AttachFileIcon />
         </IconButton>
         <IconButton>
          <MoreVertIcon />
         </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__reciever'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__reciever'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat__reciever'>
          <span className='chat__name'>Uche</span>
          This is a message
          <span className='chat__timeStamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input type='text' placeholder='Type a message' />
          <button type='submit'>
            Send Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat