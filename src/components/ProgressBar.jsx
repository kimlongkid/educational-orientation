import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percentage = Math.min((current / total) * 100, 100);

    return (
        <div style={{
            width: '100%',
            height: '10px',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '2rem'
        }}>
            <div style={{
                width: `${percentage}%`,
                height: '100%',
                background: 'var(--success)',
                borderRadius: '20px',
                transition: 'width 0.5s ease-out'
            }} />
        </div>
    );
};

export default ProgressBar;
