import React, { useState } from 'react';
import './SurpriseMe.css'; // Import the CSS file

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const surpriseOptions = [
    {
      type: 'confetti',
      element: (
        <div className="surprise-content">
          <div className="surprise-title">🎉 SURPRISE! 🎉</div>
          <div className="surprise-text">You found the confetti party!</div>
          <div className="confetti-container">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="confetti">
                {['🎉', '✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 5)]}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      type: 'joke',
      element: (
        <div className="surprise-content">
          <div className="surprise-title">😄 JOKE TIME! 😄</div>
          <div className="surprise-text">Why don't programmers like nature?</div>
          <div className="joke-punchline">It has too many bugs! 🐛</div>
        </div>
      ),
    },
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
    <div className="surprise-container">
      <div className="surprise-card">
        <h1 className="app-title">Binated Web Developer Application</h1>
        <p className="app-description">Click the button below for a surprise!</p>
        <button
          className={`surprise-button ${buttonDisabled ? 'disabled' : ''}`}
          onClick={handleSurprise}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? 'Getting surprise...' : 'Surprise Me!'}
        </button>
        {surprise && <div className="surprise-box">{surprise.element}</div>}
      </div>
    </div>
  );
};

export default SurpriseMe;
