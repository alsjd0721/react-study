import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  //{} <- 여기는 인덱스에서 부르는 data와 값을 맞춰야함
  const [activeIndex, setActiveIndex] = useState(0);
  const handleCLick = (i) => {
    let nextIndex = activeIndex + i;
    const lastIndex = data.length - 1;
    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <Container>
        <List>
          {data.map(({ id, image }, index) => (
            <Image key={id} src={image} isActive={index === activeIndex} />
          ))}
        </List>
        <BtnPrev onClick={() => handleCLick(-1)}>이전</BtnPrev>
        <BtnNext onClick={() => handleCLick(1)}>다음</BtnNext>
      </Container>
    </>
  );
};

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const Container = styled.div`
  position: relative;
  top: 100px;
  width: 800px;
  height: 600px;
`;
const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 800px;
  height: 600px;
  opacity: ${({ isActive }) => !isActive && "0"};
  transition: opacity 1s;
`;
const BtnPrev = styled(Btn)`
  left: 20px;
`;
const BtnNext = styled(Btn)`
  right: 20px;
`;
export default Carousel;
