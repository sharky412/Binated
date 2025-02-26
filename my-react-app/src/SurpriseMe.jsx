import React, { useState } from 'react';

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const surpriseOptions = [
    {
      type: 'confetti',
      element: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>🎉 SURPRISE! 🎉</div>
          <div style={{ fontSize: '18px' }}>You found the confetti party!</div>
          <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <span 
                key={i} 
                style={{ 
                  display: 'inline-block',
                  fontSize: '24px',
                  animation: `bounce ${1 + Math.random() * 2}s infinite`,
                  animationDelay: `${Math.random() * 2}s`
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
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>😄 JOKE TIME! 😄</div>
          <div style={{ fontSize: '18px', marginBottom: '5px' }}>Why don't programmers like nature?</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>It has too many bugs!</div>
          <div style={{ fontSize: '36px', marginTop: '10px' }}>🐛</div>
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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #ebf8ff, #d6bcfa)', padding: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ fontSize: '24px', color: '#6b46c1', marginBottom: '10px' }}>Binated Web Developer Application</h1>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>Click the button below for a surprise!</p>
        <button 
          style={{ 
            background: buttonDisabled ? '#ccc' : 'linear-gradient(to right, #6b46c1, #3182ce)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: buttonDisabled ? 'not-allowed' : 'pointer',
            transition: 'transform 0.2s'
          }}
          onClick={handleSurprise}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? 'Getting surprise...' : 'Surprise Me!'}
        </button>
        {surprise && <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>{surprise.element}</div>}
      </div>
    </div>
  );
};

export default SurpriseMe;
