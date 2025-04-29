import React from 'react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span className={completed ? 'completed' : ''}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
