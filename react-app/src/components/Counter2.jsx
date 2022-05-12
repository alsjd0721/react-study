import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);

  const handlePlusClick = () => {
    setNumber(number + 1);
  };
  const handleMinusClick = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <h1>현재 카운터 값은 {number}입니다.</h1>
      <button onClick={handlePlusClick}>+1</button>{" "}
      {/* onClick={()=>setNumber(number + 1)} 함수를 안짜고 이렇게 적용할 수 있음*/}
      <button onClick={handleMinusClick}>-1</button>{" "}
      {/* onClick={()=>setNumber(number - 1);} 함수를 안짜고 이렇게 적용할 수 있음*/}
    </>
  );
};

export default Counter2;
