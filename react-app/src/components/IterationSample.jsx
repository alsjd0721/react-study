import { useRef, useState } from "react";
const defaultNames = [
  { id: 1, text: "눈사람" },
  { id: 2, text: "얼음" },
  { id: 3, text: "눈" },
  { id: 4, text: "바람" },
];

const IterationSample = () => {
  const [text, setText] = useState("");
  const [names, setNames] = useState(defaultNames);
  //const [nextId, setnextId] = useState(defaultNames.length + 1);
  const nextId = useRef(defaultNames.length + 1);

  const handleClick = (e) => {
    if (!text) return;
    alert(text + "를 추가하셧습니다");
    const newNames = [...names, { id: nextId.current, text: text }]; //{ id: nextId, text: text }
    setNames(newNames);
    setText("");
    nextId.current = nextId.current + 1;
  };
  const handelDelete = (deleteId) => {
    //names중에서 ID가 deleteId와 다른 Item만 뽑아서 newNames만들기
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };
  return (
    // <ul>{[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]}</ul>
    <ul>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="추가할 목록"
        value={text}
        ref={nextId}
      />
      <button onClick={handleClick}>추가</button>
      {names.map((name) => (
        <li key={name.id} onDoubleClick={() => handelDelete(name.id)}>
          {name.text}
        </li>
      ))}
    </ul>
  );
};

export default IterationSample;
