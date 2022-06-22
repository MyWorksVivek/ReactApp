import React from 'react'
import "./css/Emaillist.css"
import { IconButton } from '@mui/material'
import SelectAllIcon from '@mui/icons-material/SelectAll';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import ReplyIcon from '@mui/icons-material/Reply';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectedMail } from './features/mailSlice';
import { Avatar } from '@mui/material';
function Emaildetail() {
  const mail = useSelector(selectedMail);
  const history = useHistory();
  return (
    <div className='emaildetails'>
      <div className='emaillist__setting'>
        <div className='emaillist__settingLeft'>
          <IconButton>
            <ArrowBackIcon onClick={() => history.push('/')} />
          </IconButton>
          <IconButton>
            <SelectAllIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emaillist__settingRight'>
          <p>1-50 of 10,222</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className='emaildetails_message'>
        <div className='emaildetails_header'>
          <div className='emaildetails_headerLeft'>
            <h4>This is subject</h4>
          </div>

          <div className='emaildetails_headerRight'>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>

        <div className='emaildetails_middleheader'>
          <div className='emaildetails_middleheaderLeft'>
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>Vivek Addanki</h4>
            <p>sahi@ddslkjfsl.com</p>
          </div>

          <div className='emaildetails_middleheaderRight'>
            <p>Mon, 12 Jul 2021</p>
            <IconButton>
              < ReplyIcon />
            </IconButton>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

        </div>
        <div className='emaildetails_body'>
          <p>abcdxyz
          </p>
        </div>
      </div>
    </div>

  )
}

export default Emaildetail
