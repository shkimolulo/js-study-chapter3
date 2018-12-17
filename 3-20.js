// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr);

// 설명
// 배열에 객체처럼 동적 프로퍼티를 추가할 수 있습니다.
// length는 배열 원소의 가장 큰 인덱스가 변경될 때만 바뀝니다.
// 배열도 객체 중 하나이기 때문에 key:value 형태로 배열 원소와 프로퍼티가 있습니다.