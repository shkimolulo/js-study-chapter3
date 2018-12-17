var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);
console.log(objA == objB);
console.log(objB == objC);

// 설명
// 기본 타입의 변수는 동등연산자로 '값'을 비교합니다.
// 참조 타입의 변수는 동등연산자로 '가리키고 있는 객체를 참조하는 값, 주소'를 비교합니다.
// a, b는 같은 값을 갖고 있으므로 true를 반환합니다.
// objA와 objB가 같은 값을 갖고 있는 value를 프로퍼티로 갖고 있지만 참조하는 값, 주소가 다르므로 false를 반환합니다.
// objC에 objB를 대입하여 objB가 가리키고 있는 객체를 함께 가리키게 되어 true를 반환합니다.