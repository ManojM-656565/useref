import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api';

function TodoForm() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      setTitle('');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
