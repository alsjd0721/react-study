import { useRef, useState } from "react";
import styled from "styled-components";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoNow, setTodoNow] = useState("");
  const nextTodo = [...todoNow, todoList];
  const nextTodoId = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefalut();
    setTodoList(nextTodo);
    setTodoNow("");
    nextTodoId.current++;
  };

  const handleDelete = (id) => {
    alert("삭제 동작 확인입니다.");
    const nextList = todoList.filter((item) => item.id !== id);
    setTodoList(nextList);
  };
  return (
    <Layout>
      <Container>
        <Title>일정 관리</Title>
        <Form onSubmit={handleSubmit}>
          <InputText
            value={todoNow}
            placeholder="할일을 입력해주세요"
            onChange={(e) => setTodoNow(e.target.value)}
            ref={nextTodo}
          />
          <BtnSubmit onClick={handleSubmit}>추가</BtnSubmit>
        </Form>
        <Body>
          <List>
            {todoList.map((item, i) => (
              <Item key={item.id}>
                {/*아이템을 맵함수로 옮겨서 */}
                <label>
                  <input type="checkbox" />
                  <Content>리액트 기초 알아보기</Content>
                </label>
                <BtnDelete onClick={handleDelete}>삭제</BtnDelete>
              </Item>
            ))}
            <Item>
              {" "}
              {/*아이템을 맵함수로 옮겨서 */}
              <label>
                <input type="checkbox" />
                <Content>리액트 기초 알아보기</Content>
              </label>
              <BtnDelete onClick={handleDelete}>삭제</BtnDelete>
            </Item>
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #3cc77b;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  max-width: 400px;
`;

const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
`;

const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

const Body = styled.div`
  background: #fff;
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Content = styled.span``;
const BtnDelete = styled.button``;
export default ToDo;
