/*let const

// 선언
var a
//할당
= 3;

*/

//var let const

/* 1. 유효범위(scope)
    var : 함수단위 scope
    let, const : 블록 단위
*/
/* 2. 재할당 가능
    // var, let 가능
    // const : 불가능
*/

for (var i = 0; i < 5; i++) {
  console.log("안쪽" + i);
}
console.log("바깥쪽" + i);

for (let j = 0; j < 5; j++) {
  console.log("안쪽" + j);
}
console.log("바깥쪽" + j);
// var와 let의 차이를 보기위해 작성한 함수

console.log(a);
var a = 5;
console.log(a);

/* hoisting : 본래라면 에러가 나야하지만 순서가 저렇게 진행이 되기때문에 undefined로 나옴
var a
console.log(a);
var a = 5;
console.log(a);
*/

console.log(b);
let b = 5;
console.log(b);

/*  hoisting은 되나 TDZ(TEMPORAL DEAD ZONE)에 갇혀 에러메세지가 나옴
let b
console.log(b); // TDZ(TEMPORAL DEAD ZONE)에 갇힘
let b = 5;
console.log(b);
*/

// 함수선언
add(3, 4);
//함수 선언식
function add(a, b) {
  return a + b;
}
//함수 표현식
minus(6, 4);
const minus = function (a, b) {
  return a - b;
};

const minus2 = (a, b) => {
  return a - b;
};

const minus3 = (a, b) => a - b; //리턴이 간단하면 줄여서 쓸수있음 minus2 함수와 같은 역할

const person1 = {
  name1: "jason",
  age: 20,
  major: "computer",
};

const locationInfo = {
  contry: "Korea",
  city: "Seoul",
};
const subMajor = "Math";

console.log("이름은 : " + person1.name + "입니다.");
console.log("나이는 : " + person1.age + "입니다.");
console.log("전공은 : " + person1.major + "입니다.");

//비구조 할당
const { name1, age, major } = person1;

/*const name = person1.name;
const age = person1.age;
const major = person1.major*/ // 위의 const로 비구조 할당해줄수있음

console.log("이름은 : " + name1 + "입니다.");
console.log("나이는 : " + age + "입니다.");
console.log("전공은 : " + major + "입니다.");

//Templet returul
console.log(
  `이름은 ${name1}이고 나이는${age}세입니다. 전공은 ${major}를 전공했습니다.`
);

//배열 비구조

const arr1 = [1, 2, 3, 4];
// const first = arr1[0];
//const second = arr1[1];

const [first, second] = arr; // 위와 같이 비구조 할당 가능

//내용 복사, 배열 복사하고 양옆에도 추가값을 넣을수도 값을 바꿀수도있음 {펼침연산자}
const person2 = { name1: "peter", ...person1, age: 24 }; // 위치에 따라 덮어 씌여질수도, 덮어 쓸수도있음 이경우 peter가 json으로 덮어쓰이고 age = 20은 24로 덮어쓰임
const arr2 = [0, ...arr1, 5];

const person3 = { ...person1, ...locationInfo, age: 24, submajor };

//js 타입
const obj1 = { arr3: [1, 2, 3], prim: "원시" };
const obj2 = { ...obj1 };

//html 에서 ! 엔터치면 자동 셋팅됨
//props란 부모 컴포넌트에서 자식 컴포넌트의 정보를 받아오는 것을 말함
//코드가 문제없으면 임포트가 잘못됬는지 확인
//
