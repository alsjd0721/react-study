import { useMemo, useState, useCallback, useRef } from "react";
//useMemo는 불필요한 계산을 줄이기 위해 사용
const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}; // 밑의 Average 함수와 결합도가 낮어 여러곳에서 쓸수가 있음

const Average2 = () => {
  const inputEl = useRef(null);
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); // concat은 새로운 배열을 만들때 쓸수 있음
    setList(nextList);
    setNumber("");
    inputEl.current.focus(); //.FOCUS()는 DOM의 함수를 사용함
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average2;
