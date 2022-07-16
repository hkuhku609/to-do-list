import React from 'react';

const ToDosList = ({
  todos,
  setTodos,

  setEditTodo,
  setInput,
  setEditIcon,
}) => {
  const handlecheckbox = (id) => {
    const listItems = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(listItems);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setInput('');
    setEditIcon(<i className="fa-solid fa-plus" />);
  };
  const handleEdit = (id) => {
    setEditTodo(todos.find((todo) => todo.id === id));
  };
  return (
    <section className="listDiv">
      {todos.map((todo) => (
        <div key={todo.id} className="item">
          <input
            onChange={() => handlecheckbox(todo.id)}
            type="checkbox"
            name="checkbox"
            checked={todo.checked}
          />
          <label
            htmlFor="checkbox"
            style={todo.checked ? { textDecoration: 'line-through' } : null}
            onChange={(e) => e.preventDefault()}
          >
            {todo.title}
          </label>
          <div className="btns">
            <button>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => handleEdit(todo.id)}
              />
            </button>

            <button>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => handleDelete(todo.id)}
              />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToDosList;
