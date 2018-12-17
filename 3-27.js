// 숫자 메서드 호출
var num = 0.5;
console.log(num.toExponential(1));
// 숫자를 소수점 아래 인자번째 자리까지 표시하여 지수 형태의 문자열로 변환합니다.

// 문자열 메서드 호출
console.log("test".charAt(2));
// 문자열에서 인자번째 위치의 문자를 반환합니다.

// 설명
// 객체가 아닌 기본 타입의 메서드를 호출할 경우 그 순간에 객체로 변환되어 호출하고 끝나면 다시 기본값으로 복귀합니다.
// 참고
var num = 500.005;
console.log(num.toExponential(5));
console.log(num.toExponential(10));
// console.log(num.toExponential(-3));  // 0~100의 값만 인자로 전달할 수 있습니다.