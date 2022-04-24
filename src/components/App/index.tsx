import { useState, useEffect } from "react";
import styled from "styled-components";
import { ITodo, List } from "../List";

const HeaderContainer = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: blue;
  font-size: 22px;
`;

const MainContainer = styled.div`
  background-color: #000;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [todoList, setTodoList] = useState<any>(null);

  useEffect(() => {
    const getTodoList = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodoList(data));
    };

    getTodoList();
  }, []);

  const deleteTodo = (id: number) => {
    setTodoList((todos: ITodo[]) =>
      todos.map((t) => {
        if (t.id === id) return { ...t, isDone: true };
        return t;
      })
    );
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <Title>ToDo App</Title>
      </HeaderContainer>
      <main>{todoList && <List todos={todoList} onDelete={deleteTodo} />}</main>
    </MainContainer>
  );
}

export default App;
