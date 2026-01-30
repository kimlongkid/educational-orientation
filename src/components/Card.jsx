import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div className={`glass-panel ${className}`} style={{ padding: '2rem' }} {...props}>
            {children}
        </div>
    );
};

export default Card;
