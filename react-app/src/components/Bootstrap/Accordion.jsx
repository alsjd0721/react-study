import styled from "styled-components";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    // 이미 열려있는거 클릭하면 모두 닫기
    // if (activeIndex === index) {
    //   setActiveIndex(-1);
    // } else {
    //   setActiveIndex(index);
    // }
    const nextIndex = index === activeIndex ? -1 : index;
    setActiveIndex(nextIndex);
  };
  return (
    <List>
      <List>
        {data.map(
          (
            { id, title, content },
            index //item = {id,title,content}로 비구조 할당 해도됨, 비구조 할당하면 옆의 item을 빼도 출력 가능 {item은 데이터의 임시 변수}
          ) => (
            <Item key={id}>
              <Header onClick={() => handleClick(index)}>{title}</Header>
              <Body isActive={index === activeIndex}>{content}</Body>
            </Item>
          )
        )}
      </List>
    </List>
  );
};
const List = styled.div`
  border: 1px solid #ddd;
  margin: 100px;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
  border-top: 1px solid #ddd;
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) => !isActive && "none"};
`;
export default Accordion;
