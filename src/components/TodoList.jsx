import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodosByQuery } from '../api';

function TodoList({ query }) {
  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos', query],
    queryFn: () => fetchTodosByQuery(query),
    staleTime: 1000 * 60, 
  });

  const filtered = useMemo(() => {
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [todos, query]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {filtered.map(todo => (
        <li key={todo._id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
