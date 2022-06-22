import React from 'react'
import "./css/Emaillist.css"
import { IconButton } from '@mui/material'
import SelectAllIcon from '@mui/icons-material/SelectAll';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EmaillistSetting() {
    return (
        <div className='emaillist__setting'>
            <div className='emaillist__settingLeft'>
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
    )
}

export default EmaillistSetting
