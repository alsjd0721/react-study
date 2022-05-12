//import { useReducer } from "react";
//import { useEffect, useState,  } from "react";

import useInputs from "../hooks/useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };
  // //   const [name, setName] = useState(null);
  // //   const [nickName, setNickName] = useState(null);

  // //   useEffect(
  // //     //useEffect의 열할은 특정값을 업데이트 시키위해 넣음
  // //     () => {
  // //       console.log("Mount");
  // //       //console.log("렌더링이 완료되었습니다,");
  // //       console.log({ name, nickName });

  // //       return () => {
  // //         console.log("cleanup");
  // //         console.log("바뀌기전 name : ", name);
  // //         console.log("바뀌기전 nickName : ", nickName);
  // //       };
  // //     },
  // //     [] // 빈 배열이면 마운트 될때 한번 실행됨 ex) : api를 호출할때 딱 한번만 부르기위해
  // //   );

  // //   const onChangeNameHanler = (e) => {
  // //     setName(e.target.value);
  // //   };
  // //   const onChangeNickNameHanler = (e) => {
  // //     setNickName(e.target.value);
  // //   };
  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          placeholder="이름"
          onChange={onChange}
        />
        <input
          name="nickname"
          value={nickname}
          placeholder="이름"
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름 :</b> {name}
      </div>
      <div>
        <b>닉네임 :</b> {nickname}
      </div>
    </div>
    /* <>
     <div>
        <input value={name} placeholder="이름" onChange={onChangeNameHanler} />
        <input
          value={nickName}
          placeholder="닉네임"
          onChange={onChangeNickNameHanler}
        />
      </div>
      <div>
        <b>이름 :</b> {name}
      </div>
      <div>
        <b>닉네임 :</b> {nickName}
      </div>
    </> */
  );
};

export default Info;
