import React from 'react'
import "./css/Emaillist.css"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from './features/mailSlice';
function Emailbody({ name, subject, message, time }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const setMail = () => {
        dispatch(openMessage({
            name,
            subject,
            message,
            time
        }))
        history.push('/mail');
    }
    return (
        <div className='emailbody' onClick={setMail}>
            <div className='emailbody_left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelImportantIcon />
                <h4>{name}</h4>
            </div>

            <div className='emailbody_middle'>
                <div className='emailbody_middle_msg'>
                    <p><b>{subject} </b>{message}</p>
                </div>

            </div>

            <div className='emailbody_right'>
                <p>{time}</p>

            </div>
        </div>
    )
}

export default Emailbody
