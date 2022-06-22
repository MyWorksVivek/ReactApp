import { IconButton } from '@mui/material'
import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/Header.css"
function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <ReorderIcon />
                </IconButton>
            </div>

            <div className='header_middle'>
                <div className='search_mail'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type="text" placeholder="Search mail" />
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>


            </div>

        </div>


    )
}

export default Header
