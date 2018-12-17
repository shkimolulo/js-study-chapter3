var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);
console.log(arr);
console.log(arr.length);

// 설명
// delete와 달리 배열 요소를 완전히 없앱니다.
// splice(start, deleteCount, item): start번째부터 deleteCount만큼을 삭제 후 그 자리에 item을 추가합니다.
// 참고
arr.splice(50, 1, 'fifty');
console.log(arr);
console.log(arr.length);
// start 위치가 length를 넘어갈 경우 현재 length번째에 item을 추가합니다.