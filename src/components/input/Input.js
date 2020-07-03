import React from 'react';
import './Input.scss';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className='form' onSubmit={(event) => sendMessage(event)}>
    <input
      className='form-input'
      type='text'
      placeholder='Type message here...'
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button className='msg-button' type='submit'>
      Send
    </button>
  </form>
);

export default Input;
