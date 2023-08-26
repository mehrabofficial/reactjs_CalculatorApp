
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
        style={{ gridColumn: 'span 4', padding: '10px', fontSize: '24px' }}
      />
      <button className="button" onClick={() => handleButtonClick('7')}>7</button>
      <button className="button" onClick={() => handleButtonClick('8')}>8</button>
      <button className="button" onClick={() => handleButtonClick('9')}>9</button>
      <button className="button" onClick={() => handleButtonClick('/')}>/</button>
      <button className="button" onClick={() => handleButtonClick('4')}>4</button>
      <button className="button" onClick={() => handleButtonClick('5')}>5</button>
      <button className="button" onClick={() => handleButtonClick('6')}>6</button>
      <button className="button" onClick={() => handleButtonClick('*')}>*</button>
      <button className="button" onClick={() => handleButtonClick('1')}>1</button>
      <button className="button" onClick={() => handleButtonClick('2')}>2</button>
      <button className="button" onClick={() => handleButtonClick('3')}>3</button>
      <button className="button" onClick={() => handleButtonClick('+')}>+</button>
      <button className="button" onClick={() => handleButtonClick('0')}>0</button>
      <button className="button" onClick={handleClear}>C</button>
      <button className="button" onClick={handleCalculate}>=</button>
      <button className="button" onClick={() => handleButtonClick('-')}>-</button>
    </div>
  );
};

export default App;

