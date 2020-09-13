import React, { useState , useEffect } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./Components/TodoList";
import { AddTodoForm } from "./Components/AddTodoForm";
import styled from 'styled-components';
import useLocalStorage from './useLocalStorage';


const App: React.FC = () => {
  // const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [todos, setTodos] = useLocalStorage('TODOS',initialTodos);
  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map((todo:Todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  useEffect(() => {

    if(todos.length > 0){
      localStorage.setItem('TODOS',JSON.stringify(todos));
    }
   }, [todos])


  return (
    <React.Fragment>
      <OutlinedContainer>
      <Typography>Total todos remaining: {todos.filter((todo:any)=>todo.complete === false).length} out of {todos.length}.</Typography>
      <Paper>
      <AddTodoForm  addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      </Paper>
    </OutlinedContainer>
    </React.Fragment>
  );
};

export default App;


const Typography = styled.h4`
color:yellow;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center`

const OutlinedContainer = styled.div`
background-color: black;
min-height: 97vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center`

const Paper = styled.div`
background-color: white;
min-height: 60vh;
min-width: 50vh;
display: flex;
flex-direction: column;
align-items: center`