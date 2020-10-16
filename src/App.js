import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [vote, setVote] = useState(0);

  function upVote() {
    setVote(vote + 1);
  }

  function downVote() {
    setVote(vote - 1);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='vote' title='vote count'>
          {vote}
        </p>
        <section className='votes'>
          <button title='upVote' onClick={upVote}>
            <span role='img' aria-label='Up vote'>
              👍🏿
            </span>
          </button>
          <button title='downVote' onClick={downVote}>
            <span role='img' aria-label='Down vote'>
              👎🏿
            </span>
          </button>
        </section>
      </header>
    </div>
  );
}

export default App;
