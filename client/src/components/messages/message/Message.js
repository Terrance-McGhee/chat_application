import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.scss';

const Message = ({ message: { user, text }, name }) => {
  let sentByCurrentUser = false;

  const trimUserName = name.trim().toLowerCase();

  if (user === trimUserName) {
    sentByCurrentUser = true;
  }
  return sentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sent-text pr-8'>{trimUserName}</p>
      <div className='message-box background-light'>
        <p className='message-text'>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <p className='sent-text pr-8'>{user}</p>
      <div className='message-box background-dark'>
        <p className='message-text'>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
