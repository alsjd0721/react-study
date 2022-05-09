import MyComponents from "./MyComponent";

const Parent = () => {
  const name2 = "nodejs";
  return (
    <>
      Parent
      <MyComponents name="리액트" name2={name2} />
      <MyComponents name="뷰">
        <h1>반갑습니다!</h1>
      </MyComponents>
      <MyComponents name="앵귤러" />
      <MyComponents name3="프롭스 이해를 돕기 위한 문장입니다." />
    </>
  );
};
// MyComponents의 props 안으로 들어감
export default Parent;
