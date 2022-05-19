import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DropDown = () => {
  const buttonEl = useRef(null);
  const [isShow, setIsShow] = useState(false);
  //   const HandleToggle = () => {
  //     setIsShow(true);
  //     if (isShow === true) {
  //       setIsShow(false);
  //     }
  //   };
  useEffect(() => {
    const onClick = (e) => {
      console.log(e.target);
      console.log(buttonEl.current);
      //클릭한게 버튼이 아닐때만 false로
      if (e.target !== buttonEl.current) {
        setIsShow(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <>
      <Container>
        <Button ref={buttonEl} onClick={() => setIsShow(!isShow)}>
          Dropdown
        </Button>
        {/*onClick={HandleToggle}*/}
        {isShow && (
          <Menu>
            <Item>item #1</Item>
            <Item>item #2</Item>
            <Item>item #3</Item>
            <Item>item #4</Item>
          </Menu>
        )}
      </Container>
    </>
  );
};
const Button = styled.button`
  background: #198794;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;
const Menu = styled.ul`
  position: absolute;
  top: 45px;
  background: #fff;
  margin: 0px;
  padding: 0px;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 120px;
`;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #efefef;
  }
`;

export default DropDown;
