import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ name, onClose, onSubmit }) => {
  //부모{index.jsx}에서 준 onClose를 받아옴
  const [changeName, setChangeName] = useState(name);
  const handleClick = () => {
    onClose();
    onSubmit(changeName);
  };
  return (
    <>
      <Backdrop onClick={onClose} />
      {/*클릭{onClick}시 부모{index.jsx}에서 받아온 onClose를 실행 */}
      <Container>
        <h1>이름 바꾸기</h1>
        <input
          value={changeName}
          onChange={(e) => {
            console.log(e);
            setChangeName(e.target.value);
          }}
        />
        <button onClick={handleClick}>확인</button>
      </Container>
    </>
  );
};
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
`;

export default ModalName;
