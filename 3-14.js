// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);
console.log(emptyArr.length);

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length);

// 설명
// 대괄호만을 이용해서 length가 0인 빈 배열을 생성했는데 0번째에 아무것도 없으므로 emptyArr[0]은 undefined가 출력됩니다.
// 배열 내 추가하고자 하는 아무 위치에나 값을 저장할 수 있고 모든 데이터 타입을 포함할 수 있습니다.
// 현재 배열의 인덱스 중 가장 큰 값, 여기서는 7을 기준으로 length를 정하여 8이 되고 모든 배열은 length 프로퍼티를 갖습니다.
