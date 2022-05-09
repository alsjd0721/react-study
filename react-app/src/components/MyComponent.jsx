const MyComponents = (props) => {
  const name3 = props.name3; // 변수로 지정해서 사용할수도 있음.
  //{name3, children, name2, name} 위의 프롭스를 빼고 이 데이터를 넣어 비구조화도됨 이경우 앞의 props를 빼도됨 단, 무조건 중괄호를 넣어야 인식함
  return (
    <div>
      반갑습니다, 제이름은 {props.name}입니다. {props.name2}
      {name3}
      {props.children}
    </div>
  );
};
//  {props.children}은 parent에서 지정한 태그 내용 <h1>을 불러옴 해당 children표현은 고정임

export default MyComponents;
