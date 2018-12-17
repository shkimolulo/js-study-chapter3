// 객체 생성 방법2
// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
};

console.log(typeof foo);
console.log(foo);

// 설명 
// 리터럴(literal)은 소스 코드의 고정된 값으로, 여기서는 'foo', 30, 'male' 입니다.
// 객체 리터럴은 값을 표기하여 객체를 생성하는 방법입니다.

// 객체 생성 방법3
// 생성자 함수 방식으로 goo 객체 생성
var Foo = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
};

var goo = new Foo('goo', 40, 'female');
console.log(typeof goo);
console.log(goo);