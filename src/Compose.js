import React, { useState } from 'react'
import "./css/Compose.css"
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import HeightIcon from '@mui/icons-material/Height';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';//For  claim
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase';
import 'firebase/firestore';
import  {db}  from './FireBase';
function Compose() {
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const dispatch = useDispatch();
    const formSubmit = (e) =>{
        e.preventDefault();
        if(to=="")
        {
            return alert("To is required");
        }
        if(subject=="")
        {
            return alert("subject is required");
        }
        if(message=="")
        {
            return alert("message is required");
        }
        db.collection("emails").add({
            to:to,
            subject:subject,
            message:message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setTo("");
        setSubject("");
        setMessage("");
        alert("email sent successfully");
    }
    return (
        <div className="compose">
            <div className='compose_header'>
                <div className='compose_header_left'>
                    <span>New Message</span>
                </div>
                <div className='compose_header_right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className='compose_body'>
                    <div className='compose_bodyform'>
                        <input type="email" placeholder='Reciepents' value={to} onChange={(e)=>setTo(e.target.value)}/>
                        <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                        <textarea rows="20" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                </div>

                <div className='compose_footer'>
                    <div className='compose_footerleft'>
                        <button type='submit'>Send</button>
                    </div>

                    <div className='compose_footerright'>
                        <FormatColorTextIcon/>
                        <LinkIcon/>
                        <InsertEmoticonIcon/>
                        <NoteAddIcon/>
                        <PhotoIcon/>
                        <PhonelinkLockIcon/>
                        <CreateIcon/>
                        <MoreVertIcon/>
                        <DeleteIcon/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose
