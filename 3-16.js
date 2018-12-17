var arr = [0, 1, 2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);

// 설명
// arr의 length를 임의로 3->5으로 늘릴 경우 실제 메모리가 할당되지는 않고 3, 4번째 원소는 undefined로 출력됩니다.
// arr의 length를 임의로 5->2으로 줄일 경우 실제로 2번째 원소는 삭제되어 undefind로 출력됩니다.