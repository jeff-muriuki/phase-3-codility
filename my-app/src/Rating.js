// Rating.jsx
import React from 'react';

export const Rating = ({ name, rate, content }) => {
    const filledStars = '★'.repeat(rate);
    const emptyStars = '☆'.repeat(5 - rate);

    return (
        <div className="ratings__item">
            <h3>{name}</h3>
            <p>{content}</p>
            <div>
                {filledStars.split('').map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
                {emptyStars.split('').map((star, index) => (
                    <span key={index + rate}>{star}</span>
                ))}
            </div>
        </div>
    );
};
