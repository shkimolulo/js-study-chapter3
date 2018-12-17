var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);
console.log(arr.length);

// 설명
// 배열도 객체이므로 요소나 프로퍼티 삭제 시 delete 연산자를 사용할 수 있습니다.
// delete 수행 시 arr[2]에 undefined로 설정하고 원소 자체를 삭제하지는 않아 length는 변하지 않습니다.