import React, { useState } from 'react';
import "./SurpriseMe.css";

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const surpriseOptions = [
    {
      type: 'confetti',
      element: (
        <div className="content">
          <div className="title">🎉 SURPRISE! 🎉</div>
          <div className="text">You found the confetti party!</div>
          <div className="confetti-container">
            {Array.from({ length: 40 }).map((_, i) => (
              <span 
                key={i} 
                className="confetti" 
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              >
                {['🎉', '✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 5)]}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'joke',
      element: (
        <div className="content">
          <div className="title">😄 JOKE TIME! 😄</div>
          <div className="text">Why don't programmers like nature?</div>
          <div className="bold">It has too many bugs! 🐛</div>
        </div>
      )
    }
  ];

  const handleSurprise = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      const randomSurprise = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
      setSurprise(randomSurprise);
      setButtonDisabled(false);
    }, 700);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="header">Binated Web Developer Application</h1>
        <p className="description">Hello! Click the button below for a surprise!</p>
        <button
          className={`button ${buttonDisabled ? 'disabled' : ''}`}
          onClick={handleSurprise}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? 'Getting surprise...' : 'Surprise Me!'}
        </button>
        <div className="result">{surprise && surprise.element}</div>
      </div>
    </div>
  );
};

export default SurpriseMe;
