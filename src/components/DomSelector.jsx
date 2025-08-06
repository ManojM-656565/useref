import React, { useRef } from 'react';

function DomSelector() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();           
    inputRef.current.select();          
  };

  return (
    <div>
      <h2>Focus & Select with useRef</h2>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={handleFocus}>Focus & Select</button>
    </div>
  );
}

export default DomSelector;
