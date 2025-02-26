import React, { useState } from 'react';

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const surpriseOptions = [
    {
      type: 'confetti',
      element: (
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">🎉 SURPRISE! 🎉</div>
          <div className="text-xl text-center">You found the confetti party!</div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <span 
                key={i} 
                className="animate-bounce inline-block" 
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
      type: 'color',
      element: (
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">🎨 COLOR EXPLOSION! 🎨</div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 25 }).map((_, i) => {
              const hue = (i * 14) % 360;
              return (
                <div 
                  key={i} 
                  className="w-16 h-16 rounded-lg transition-all duration-500 hover:scale-110"
                  style={{ 
                    backgroundColor: `hsl(${hue}, 80%, 60%)`,
                    animation: `pulse 1.5s infinite ${i * 0.1}s`
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      )
    },
    {
      type: 'joke',
      element: (
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">😄 JOKE TIME! 😄</div>
          <div className="text-xl mb-4">Why don't programmers like nature?</div>
          <div className="text-2xl font-bold mt-2">It has too many bugs!</div>
          <div className="text-6xl mt-6">🐛</div>
        </div>
      )
    },
    {
      type: 'riddle',
      element: (
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">🧩 RIDDLE ME THIS! 🧩</div>
          <div className="text-xl mb-6">I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?</div>
          <div className="text-2xl font-bold mt-2 p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={(e) => {
            e.currentTarget.textContent = "An echo!";
          }}>
            Click to reveal answer
          </div>
        </div>
      )
    },
    {
      type: 'fortune',
      element: (
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl mb-4">🔮 YOUR FORTUNE! 🔮</div>
          <div className="text-2xl p-6 border-4 border-purple-400 rounded-lg bg-purple-100">
            {[
              "Your coding skills will impress everyone today!",
              "A new job opportunity awaits you very soon!",
              "Your next project will be your most successful yet!",
              "Today is a great day to learn a new programming language!",
              "Your bug-fixing abilities will be legendary!"
            ][Math.floor(Math.random() * 5)]}
          </div>
          <div className="text-6xl mt-6">✨</div>
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Binated Web Developer Application</h1>
        
        <div className="mb-8 text-center">
          <p className="text-lg mb-8">
            Hello! Thanks for checking out my application. Click the button below for a surprise!
          </p>
          
          <button
            className={`px-8 py-4 text-xl font-bold text-white rounded-lg shadow-lg transition-all duration-300 ${
              buttonDisabled 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 hover:scale-105'
            }`}
            onClick={handleSurprise}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? 'Getting surprise...' : 'Surprise Me!'}
          </button>
        </div>
        
        <div className="mt-8">
          {surprise && (
            <div className="p-6 border border-gray-200 rounded-lg">
              {surprise.element}
            </div>
          )}
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>Created by [Your Name] for Binated Web Developer Application</p>
        </div>
      </div>
    </div>
  );
};

export default SurpriseMe;