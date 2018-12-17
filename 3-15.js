var arr = [];
console.log(arr.length);

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);

// 설명
// 빈 배열 생성 시 0, 가장 큰 인덱스 값으로 배열의 길이가 정해집니다.
// 하지만, 실제 메모리는 length 크기, 여기서는 101 처럼 할당되지는 않습니다.