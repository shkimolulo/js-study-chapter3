var arr = ['bar'];
var obj = {
    name : 'foo',
    length : 1
};

arr.push('baz');
console.log(arr);

// obj.push('baz'); // length 프로퍼티를 가지고 있지만 배열은 아니기 때문에 에러 발생

// 설명
// 유사 배열 객체(array-like objects)는 js에서 length 프로퍼티를 가진 객체로 apply() 사용 시 표준 배열 메서드 활용이 가능합니다.