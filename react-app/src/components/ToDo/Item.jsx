import styled, { css } from "styled-components";

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;
  const handleClick = () => onDelete(id); // 함수로 선언해야 실행이됨
  const handleChange = () => {
    //1. data의 현재 isdone값을 반대로 <- 구현
    //2. input의 value(체크여부)를 isDone으로 방법은 두가지가있음
    // 2번 방법의 경우 e.target.함수로 쓰면됨
    onChecked(id);
  };
  return (
    <>
      <Container key={id}>
        <label>
          <input type="checkbox" checked={isDone} onChange={handleChange} />
          <Content isDone={isDone}>{text}</Content>
        </label>
        <BtnDelete onClick={handleClick}>삭제</BtnDelete>
      </Container>
    </>
  );
};
const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Content = styled.span`
  /* color: ${(props) => props.isDone && "#25bbe0"};
  text-decoration: ${({ isDone }) => isDone && "line-thtough"};
  밑의 내용과 같음*/

  ${({ isDone }) =>
    isDone &&
    css`
      color: #25bbe0;
      text-decoration: line-through;
    `}
`;
const BtnDelete = styled.button``;

export default Item;
