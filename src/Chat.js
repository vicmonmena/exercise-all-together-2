import React, { Component } from 'react';
import Messages from './Messages';
import Form from './Form';

class Chat extends Component {

  render() {
    const { title, username, messages, sendMessage } = this.props;
    return(
      <div className="chat-window">
        <h2>{title}</h2>
        <div className="name sender">{username}</div>
        <Messages messages={messages} username={username}/>
        <div>
          <Form username={username} sendMessage={sendMessage} />
        </div>
      </div>
    )
  }
}

export default Chat;