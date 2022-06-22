import React from 'react'
import { Button } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import Sidebaroptions from './Sidebaroptions'
import "./css/Sidebar.css"
import { useDispatch } from 'react-redux/es/exports';
import { openSendMessage } from './features/mailSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddBoxIcon />} className="compose_btn" onClick={() => dispatch(openSendMessage())}>COMPOSE</Button>
      <Sidebaroptions Icon={InboxIcon} title="Inbox" number="224" isactive={true} />

      <Sidebaroptions Icon={SendIcon} title="Sent" number="254" />
    </div>
  )
}

export default Sidebar
