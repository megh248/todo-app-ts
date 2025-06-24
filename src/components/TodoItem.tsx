import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      >
        {todo.text}
      </span>
      <div>
      <button onClick={() => toggleTodo(todo.id)}>Mark {todo.completed ? 'Incomplete' : 'Complete'}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem; 