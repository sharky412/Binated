import React, { useState } from 'react';
import './SurpriseMe.css';

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const surprises = [
    {
      type: 'confetti',
      element: (
        <div className="surprise-content">
          <div className="surprise-title">🎉 SURPRISE! 🎉</div>
          <div className="surprise-text">You found the confetti party!</div>
          <div className="confetti-container">
            {[...Array(30)].map((_, i) => (
              <span key={i} className="confetti" style={{ 
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}>
                {['🎉', '✨', '💫', '⭐', '🌟', '🎊', '🪅', '🎈'][Math.floor(Math.random() * 8)]}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'joke',
      element: (
        <div className="surprise-content">
          <div className="surprise-title">😄 JOKE TIME! 😄</div>
          <div className="surprise-text">Why don't programmers like nature?</div>
          <div className="joke-punchline">It has too many bugs! 🐛</div>
          <div className="laugh-emojis">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="laugh-emoji" style={{ animationDelay: `${i * 0.2}s` }}>
                😂
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      type: 'facts',
      element: (
        <div className="surprise-content">
          <div className="surprise-title">🧠 RANDOM FACT! 🧠</div>
          <div className="surprise-text">Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!</div>
          <div className="fact-emoji">🍯</div>
        </div>
      )
    }
  ];

  const handleSurprise = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSurprise(surprises[Math.floor(Math.random() * surprises.length)]);
      setIsLoading(false);
    }, 700);
  };

  return (
    <div className="surprise-container">
      <div className="surprise-card">
        <h1 className="app-title">Binated Web Developer Application</h1>
        <p className="app-description">Click the button below for a surprise!</p>
        <button
          className={`surprise-button ${isLoading ? 'disabled' : ''}`}
          onClick={handleSurprise}
          disabled={isLoading}
        >
          {isLoading ? 
            <span className="loading-text">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </span> : 
            <span>Surprise Me! 🎁</span>
          }
        </button>
        {surprise && (
          <div className="surprise-box animate-in">
            {surprise.element}
            <button 
              className="another-surprise-button" 
              onClick={handleSurprise}
              disabled={isLoading}
            >
              Another surprise!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurpriseMe;