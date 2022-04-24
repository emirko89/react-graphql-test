import { FC } from "react";
import styled from "styled-components";

interface ITodoList {
  todos: ITodo[];
  onDelete: (id: number) => void;
}

export interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
  isDone: boolean;
}

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const ListItem = styled.p<StyledItemProps>`
  color: grey;
  text-decoration: ${(props) => props.isDone && "line-through"};
`;

const DeleteIcon = styled.span`
  color: grey;
  cursor: pointer;
`;

interface StyledItemProps {
  isDone: boolean;
}

export const List: FC<ITodoList> = ({ todos, onDelete }) => {
  return (
    <div>
      {todos?.map((t, i) => {
        return (
          <ListContainer key={i}>
            <ListItem isDone={t.isDone}>{t.title}</ListItem>
            <DeleteIcon onClick={() => onDelete(t.id)}>x</DeleteIcon>
          </ListContainer>
        );
      })}
    </div>
  );
};
