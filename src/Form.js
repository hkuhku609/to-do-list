import React, { useEffect } from 'react';

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  editIcon,
  setEditIcon,
}) => {
  const updateTodo = (title, id, checked) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { title, id, checked } : todo))
    );
    setEditTodo('');
    setEditIcon(<i className="fa-solid fa-plus" />);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
      setEditIcon(<i className="fa-solid fa-pen-to-square" />);
    } else {
      setInput('');
    }
  }, [setInput, editTodo, setEditIcon]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          title: input,
          checked: false,
        },
      ]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.checked);
    }
  };

  return (
    <section className="addItem">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add Item..."
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addItemBtn">{editIcon}</button>
      </form>
    </section>
  );
};

export default Form;
