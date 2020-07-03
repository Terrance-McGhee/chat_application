import React from 'react';
import onlineIcon from '../../utilities/onlineIcon.svg';
import closeIcon from '../../utilities/closeIcon.svg';

import './ChatBox.scss';

const ChatBox = ({ room }) => (
  <div className='nav-bar'>
    <div className='left-icon'>
      <img className='online' src={onlineIcon} alt='online' />
      <h2 className='room-header'>{room}</h2>
    </div>
    <div className='right-icon'>
      <a href='/'>
        <img className='close' src={closeIcon} alt='close' />
      </a>
    </div>
  </div>
);

export default ChatBox;
