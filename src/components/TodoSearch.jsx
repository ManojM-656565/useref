import React, { useState, useCallback } from 'react';

function TodoSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  }, [onSearch]);

  return (
    <input
      value={query}
      onChange={handleChange}
      placeholder="Search todos..."
    />
  );
}

export default TodoSearch;
