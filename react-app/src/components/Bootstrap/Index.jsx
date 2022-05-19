// import Accordion from "./Accordion";
// import { accordionData } from "../../datas/Bootstrap";
// import DropDown from "./DropDown";
// import { CarouselData } from "../../datas/Image";
// import Carousel from "./Carousel";
import ModalName from "./ModalName";
import { useState } from "react";

const Bootstrap = () => {
  //const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState("blah blah blah");

  return (
    <>
      {/* <Accordion data={accordionData} />
      <Accordion data={accordionData} />
      {/* 안의 data를 바꿔서 재활용 가능 
      <button onClick={() => setIsShowDropDown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropDown && <DropDown />}</div>
      <Carousel data={CarouselData} />*/}

      {/* 1. 부모 : parameter를 받아서 name값을 변경하는 함수를 전달
          2. 모달 : 확인버튼을 누르면 input에 입력된 값을 1번함수에 넣고 실행 & 모달닫기
      */}
      <h1>이름:{name}</h1>
      <button onClick={() => setIsShowModalName(true)}>이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          onClose={() => setIsShowModalName(false)}
          name={name}
          onSubmit={(val) => {
            console.log("val값이 궁금해서 찍어봄", val);
            setName(val);
          }}
        />
      )}
    </>
  );
};

export default Bootstrap;
