import { useState } from "react"; // 비구조 할당

const Counter = () => {
  const [number, setNumber] = useState(5); //비구조 할당
  //let number = 5;

  const handleClick = () => {
    console.log(number);
    setNumber(number + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

//렌더링을 위해 해당 컴포넌트는 다시 실행이 되어야함
export default Counter;
