import React, { useState, useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Counter from './components/Counter';
import DomSelect from './components/DomSelector';

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Useref</h1>
        {/* <TodoForm />
        <TodoSearch onSearch={handleSearch} />
        <TodoList query={searchQuery} /> */}
        <Counter/>
        <DomSelect/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
