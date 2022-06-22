import React, { useEffect } from 'react'
import "./css/Emaillist.css"
import EmaillistSetting from './EmaillistSetting'
import Emailbody from './Emailbody'
import { db } from './FireBase';
import { useState } from 'react';
function Emaillist() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])
  return (
    <div className='emaillist'>
      <EmaillistSetting />
      {
        emails.map(({ id, data }) => {
          return <Emailbody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} />

        })
      }

    </div>
  )
}

export default Emaillist
