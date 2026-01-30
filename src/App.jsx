import React, { useState } from 'react';
import Landing from './pages/Landing';
import Survey from './pages/Survey';
import Result from './pages/Result';

function App() {
  const [view, setView] = useState('landing'); // landing, survey, result
  const [userAnswers, setUserAnswers] = useState(null);

  const startSurvey = () => {
    setView('survey');
    window.scrollTo(0, 0);
  };

  const finishSurvey = (answers) => {
    setUserAnswers(answers);
    setView('result');
    window.scrollTo(0, 0);
  };

  const restart = () => {
    setUserAnswers(null);
    setView('landing');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {view === 'landing' && <Landing onStart={startSurvey} />}
      {view === 'survey' && <Survey onComplete={finishSurvey} />}
      {view === 'result' && <Result answers={userAnswers} onRestart={restart} />}

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
        © 2024 Educational Orientation | Built with ❤️ for Kids
      </footer>
    </>
  );
}

export default App;
