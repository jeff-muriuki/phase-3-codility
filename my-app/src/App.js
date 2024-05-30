// App.js
import React from 'react';
import RatingsList from './RatingsList';

const ratings = [
  { name: 'John Doe', content: 'Nice thing!', rate: 5 },
  { name: 'Jane Doe', content: 'Could be better.', rate: 3 },
  { name: 'Sam Smith', content: 'Loved it!', rate: 4 },
];

const App = () => {
  return (
    <div>

      <h1>Ratings</h1>
      <RatingsList ratings={ratings} />
    </div>
  );
};

export default App;
