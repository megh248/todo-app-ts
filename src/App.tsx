import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { addTodo as addTodoAction, deleteTodo as deleteTodoAction } from './redux/todos/todosSlice';
import { Todo } from './types';

// ThemeToggleButton component
const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ marginBottom: '1rem' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch(addTodoAction(newTodo));
  };

  const toggleTodo = (id: number) => {
    // This can be implemented in Redux if needed
    // For now, just a placeholder
    // dispatch(toggleTodoAction(id));
  };

  const deleteTodo = (id: number) => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggleButton />
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
