import React, { Component } from 'react';
import Button from './Button';

class Form extends Component {

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {

    const { sendMessage, username } = this.props;
    return(
      <form className="input-group" onSubmit={sendMessage}>
        <input type="text" className="form-control" name="msg" placeholder="Enter your message..." />
        <input type="hidden" name="username" value={username} />
        <div className="input-group-append">
          <Button text="SEND" isDisabled={this.isDisabled()}/>
        </div>
      </form>
    )
  }
}

export default Form;