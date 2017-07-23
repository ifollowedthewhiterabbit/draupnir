import React from 'react'
import Message from './message'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

export default function MessagesWrapper({
  adminMessages, 
  from, 
  message, 
  onCreateMessage, 
  currentUser,
  onMessageDelete
}) {

  const handleCreateMessage = (e, onCreateMessage) => {
    e.preventDefault()
    const form = e.target
    const message = form.message.value
    const currentUserId = currentUser._id
    onCreateMessage({currentUserId, message})
    document.getElementById('message').value = ""
  }
  return (
    <div style={{display: 'flex'}}>
      <div>
      {
        adminMessages ? adminMessages.map((adminMessage) => (
          <Message className='message'
            key={ adminMessage._id }
            message={ adminMessage.message }
            messageId={ adminMessage._id }
            time={ adminMessage.time }
            from={ adminMessage.from }
            onMessageDelete={ onMessageDelete }
          />
        ))
        :
        ""
      }
      </div>
      <div style={{width: '480px', marginLeft: '4em', marginTop: '1.4em'}}>
        <p style={{color: 'white', fontSize: '2em'}}>Message</p>
        <form onSubmit={(e) => handleCreateMessage(e, onCreateMessage)}>
          <textarea id="message" name="message" placeholder="  type message.." style={{background: 'none', border: 'solid 1px white', borderRadius: '5px', height: '9em', color: 'white', width: '100%', fontSize: '1.6em'}}/>
          <Button className="sendBtn" bsStyle="primary" type="submit">send</Button>
        </form>
      </div>    
    </div>
  )
}