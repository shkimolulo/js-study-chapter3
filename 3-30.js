console.log(!!0);   // false
console.log(!!1);   // true
console.log(!!'string');    // ture
console.log(!!''); // false
console.log(!!true);    // true
console.log(!!false);   // false
console.log(!!null);    // false
console.log(!!undefined);   // false
console.log(!!{});  // true
console.log(!![1,2,3]); // true

// 설명
// !!은 피연산자를 불린값으로 변환합니다. 0, '', false, null, undefined의 경우 false를 반환합니다.
// 값이 비어있는 객체라도 true를 반환합니다.