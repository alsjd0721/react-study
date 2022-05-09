import { useState } from "react";
const defaultForm = { username: "", message: "", message2: "" };
const EventPractice = () => {
  // const [message, setMessage] = useState(null);
  // const [username, setUsername] = useState(null);
  const [form, setForm] = useState({ username: "", message: "", message2: "" });
  const { username, message, message2 } = form;

  const handleClick = () => {
    alert(`${username}: ${message}`);
    setForm(defaultForm);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handelChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target; //위 두 문장과 동일, 비구조 할당
    const newForm = { ...form, [name]: value }; //  대괄호로 막아준 이유는 name은 스트링으로 받는 고정 변수기때문에 일반 변수로 선언된 name을 사용하기 위해
    setForm(newForm);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        name="username"
        placeholder="사용자명"
        onChange={handelChange}
        value={username}
      />

      <input
        type="text"
        name="message2"
        placeholder="아무거나 입력해보세요"
        onChange={handelChange}
        value={message2}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
//양방향 데이터를 연결해야 입력이후 초기화가 될때 다시 빈값으로 바뀜
export default EventPractice;
