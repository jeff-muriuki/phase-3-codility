// AverageRating.jsx
import React from 'react';

export const AverageRating = ({ ratings }) => {
    const totalRating = ratings.reduce((acc, rating) => acc + rating.rate, 0);
    const averageRate = Math.round(totalRating / ratings.length);
    const filledStars = '★'.repeat(averageRate);
    const emptyStars = '☆'.repeat(5 - averageRate);

    return (
        <div className="ratings__average">
            <div>
                {filledStars.split('').map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
                {emptyStars.split('').map((star, index) => (
                    <span key={index + averageRate}>{star}</span>
                ))}
            </div>
        </div>
    );
};
