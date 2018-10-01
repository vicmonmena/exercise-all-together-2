import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  sendMessage = event => {
    event.preventDefault();
    const newMessage = {
      username: event.target['username'].value,
      text: event.target['msg'].value
    };

    this.setState(prevState => ({
      messages:[
        ...prevState.messages,
        newMessage
      ]
    }))
    // Reset input
    event.target['msg'].value = '';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <Chat 
            title="Super Awesome Chat" 
            username={users[0].username} 
            sendMessage={this.sendMessage} 
            messages={this.state.messages} 
          />
          <Chat 
            title="Super Duper Chat" 
            username={users[1].username} 
            sendMessage={this.sendMessage} 
            messages={this.state.messages} 
          />
        </div>
      </div>
    );
  }
}

export default App;
