import { useState, useRef } from "react";
import styled from "styled-components";
import Form from "./Form";
import Item from "./Item";

const Todo = () => {
  const [list, setList] = useState([]);
  const nextId = useRef(1);

  const handleAdd = (text) => {
    // 텍스트를 리스트에 추가하는 코드
    const nextList = [...list, { id: nextId.current, text, isDone: false }]; // { id: nextId.current, text, isDone: true } item 컴포넌트
    setList(nextList);
    nextId.current++;
  };
  const handleDelete = (id) => {
    const nextList = list.filter((item) => item.id !== id);
    setList(nextList);
  };
  const handleChecked = (id) => {
    //id로 바꿀 item 찾아서 isDone 값을 반대로
    const newList = list.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setList(newList);
  };
  return (
    <Layout>
      <Container>
        <Title>일정 관리</Title>
        <Form onAdd={handleAdd} />
        <Body>
          <List>
            {list.map((item) => (
              <Item
                key={item.id}
                data={item}
                onDelete={handleDelete}
                onChecked={handleChecked}
              />
            ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 400px;
`;
const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

const Body = styled.div`
  background: #fff;
  min-height: 300px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
