// arr 배열 생성
var arr = ['zero', 'one', 'two'];

// push() 메서드 호출
arr.push('three');
console.log(arr); 

// length 값 변경 후, push() 메서드 호출
arr.length = 5;
arr.push('four');
console.log(arr);

// 설명
// push(): 배열의 끝(length번째)에 인자를 추가하는 표준 배열 메서드입니다.
// length를 5로 변경 시 값이 없는 length-1번째는 undefined가 되고 push를 호출하면 length번째에 값을 추가합니다.