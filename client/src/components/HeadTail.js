import React, { useState } from 'react';

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [chars, setChars] = useState([]);
  const [validationError, setValidationError] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    setValidationError('');
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      setValidationError('Please select a value from the dropdown.');
      return;
    }

    setChars((prevChars) => [...prevChars, selectedValue]);
    setSelectedValue('');
  };

  return (
    <div className="head-tail-page">
      <h2>Head & Tail Page</h2>
      <div className="input-section">
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value="" disabled>Select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {validationError && <p className="error-msg">{validationError}</p>}
      <div className="output-section">
        <div className="char-column">
          {chars.map((char, index) => (
            <div key={index}>{char}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadTail;