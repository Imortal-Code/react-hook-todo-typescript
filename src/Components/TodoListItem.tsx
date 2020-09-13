import React from "react";
import "../Styles/TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label data-testid="markAsCompleted" className={todo.complete ? "complete" : undefined}  onClick={() => toggleComplete(todo)}>
        {todo.text}
      </label>
    </li>
  );
};
