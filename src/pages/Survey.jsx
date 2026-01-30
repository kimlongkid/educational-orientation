import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { questions } from '../data/questions';

const Survey = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);

    const currentQuestion = questions[currentIndex];
    const isLastQuestion = currentIndex === questions.length - 1;

    const handleSelect = (score) => {
        setSelectedOption(score);
    };

    const handleNext = () => {
        if (selectedOption !== null) {
            const newAnswers = { ...answers, [currentQuestion.trait]: (answers[currentQuestion.trait] || 0) + selectedOption };

            if (isLastQuestion) {
                onComplete(newAnswers);
            } else {
                setAnswers(newAnswers);
                setCurrentIndex(prev => prev + 1);
                setSelectedOption(null);
            }
        }
    };

    return (
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 0', maxWidth: '800px' }}>

            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--text-light)' }}>Câu hỏi {currentIndex + 1} / {questions.length}</h3>
            </div>

            <ProgressBar current={currentIndex + 1} total={questions.length} />

            <Card className="animate-fade-in" key={currentIndex}>
                <h2 style={{ marginBottom: '2rem', textAlign: 'center', minHeight: '80px' }}>{currentQuestion.question}</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {currentQuestion.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSelect(option.score)}
                            style={{
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                background: selectedOption === option.score ? 'var(--primary-light)' : 'rgba(255,255,255,0.5)',
                                color: selectedOption === option.score ? 'white' : 'var(--text-main)',
                                border: '1px solid transparent',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                transition: 'all 0.2s',
                                textAlign: 'left',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                boxShadow: selectedOption === option.score ? '0 5px 15px rgba(108, 99, 255, 0.3)' : 'none',
                                transform: selectedOption === option.score ? 'scale(1.02)' : 'scale(1)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.text}
                            {selectedOption === option.score && <span>✨</span>}
                        </button>
                    ))}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={handleNext} disabled={selectedOption === null} style={{ opacity: selectedOption === null ? 0.5 : 1 }}>
                        {isLastQuestion ? 'Xem kết quả 🎉' : 'Tiếp theo ➡️'}
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Survey;
