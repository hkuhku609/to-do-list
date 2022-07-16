import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import ToDosList from './ToDosList';
import Search from './Search';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );
  const [editTodo, setEditTodo] = useState(null);
  const [editIcon, setEditIcon] = useState(<i className="fa-solid fa-plus" />);
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Header title={'To Do List'} />

      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        editIcon={editIcon}
        setEditIcon={setEditIcon}
      />
      <Search search={search} setSearch={setSearch} />

      <ToDosList
        todos={todos.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        setInput={setInput}
        setEditIcon={setEditIcon}
      />

      <Footer itemNum={todos.length} />
    </div>
  );
};

export default App;
