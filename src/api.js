const BASE_URL = 'https://api.freeapi.app/api/v1/todos';

export const fetchTodosByQuery = async (query) => {
  const res = await fetch(`${BASE_URL}?query=${query}&complete=false`);
  const data = await res.json();
  return data.data;
};

export const createTodo = async (todo) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data.data;
};

export const fetchTodoById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  });
  const data = await res.json();
  return data.data;
};
