// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);  // 존재하지 않는 프로퍼티에 접근 시도하여 undefined

// 객체 프로퍼티 갱신
console.log(foo.major);
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
// console.log(foo.full-name);  // 대괄호 안을 문자열 형태로 만들지 않아 not defined 에러 발생
console.log(foo.full);  // 존재하지 않는 프로퍼티에 접근 시도하여 undefined
// console.log(name);  // 존재하지 않는 변수에 접근 시도하여 에러 발생

// 참고
foo['full name'] = 'foo bar';
console.log(foo['full name']);  // 프로퍼티에 공백이 들어가는 경우에도 대괄호 표기법만을 사용
console.log(foo);
// console.log(foo[name]);  // 대괄호 안을 문자열 형태로 만들지 않아 not defined 에러 발생