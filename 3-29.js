console.log(1 == '1');  // true
console.log(1 === '1'); // false 

// 설명
// ==연산자(coercive equality)은 값이 같으면, ===(string equality)은 값과 타입까지 같아야 true를 반환합니다.

// 참고
// ==연산자
console.log(1 == 1);        // true
console.log("1" == 1);        // true
console.log(1 == '1');       // true
console.log(0 == false);     // true
console.log(0 == null);      // false
console.log(0 == undefined); // false
console.log(null == undefined); // true
// ===연산자
console.log(1 === 1);        // true
console.log("1" === 1);        // false
console.log(1 === '1');       // false
console.log(0 === false);     // false
console.log(0 === null);      // false
console.log(0 === undefined); // false
console.log(null === undefined); // false

// jquery 가이드에서는 null == undefined은 true를 반환하는 특징을 이용하는 경우에만 == 사용을 권장하고 있습니다.
// http://contribute.jquery.org/style-guide/js/