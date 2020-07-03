import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.scss';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='login-container'>
      <div className='inner-container'>
        <h1>Join room</h1>
        <div>
          <input
            className='join-input'
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className='join-input'
            type='text'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='signIn-button' type='submit'>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
