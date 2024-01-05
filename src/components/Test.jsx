import React, { useState } from 'react';
import TestSub from './TestSub';

const Test = () => {
  const [increase, setIncrease] = useState(1);

  const handleIncrement = () => {
    setIncrease(increase + 1);
  };
  return (
    <>
      <input type='text' placeholder='Ep no' />
      <input type='text' placeholder='Size' />
      <br />
      {[...Array(increase)].map((_, index) => (
        <div key={index}>
          <TestSub />
          <button onClick={handleIncrement}>+</button>
        </div>
      ))}
    </>
  );
};

export default Test;
