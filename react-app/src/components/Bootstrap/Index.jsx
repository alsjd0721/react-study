import Accordion from "./Accordion";
import { accordionData } from "../../datas/Bootstrap";
import { CarouselData } from "../../datas/Image";
// import DropDown from "./DropDown";
// import { useState } from "react";
import Carousel from "./Carousel";

const Bootstrap = () => {
  // const [isShowDropDown, setIsShowDropDown] = useState(false);
  return (
    <>
      <Accordion data={accordionData} />
      {/* <Accordion data={accordionData} /> 안의 data를 바꿔서 재활용 가능
      <button onClick={() => setIsShowDropDown((prev) => !prev)}>
        드랍다운
      </button>
      {isShowDropDown && <DropDown />}*/}
      <Carousel data={CarouselData} />
    </>
  );
};

export default Bootstrap;
