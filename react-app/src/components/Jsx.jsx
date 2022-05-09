const Jsx = () => {
  const name = "리액트!!!!";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fonstSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <h1>{name} ㅎㅇㅎㅇ</h1>
      <h2>돌고있습니다 ㅋㅋ</h2>
      {name === "리액트!!!!" ? <h1>맞습니다.</h1> : <h2>아닙니다.</h2>}
      {name === "리액트!!!!" && <h1>{name}를 출력했습니다.</h1>}
      {name || "이름이 없습니다."}
      {name ?? "이름이 또 없습니다"}
      <div style={style}>{name}</div>
    </>
  );
};
// ? 리턴에 ? 조건을 여러개 쓸순있지만 알아보기 힘듬
// Js에서 False 값 : 0, "", false, null, NaN, undefined
export default Jsx;
