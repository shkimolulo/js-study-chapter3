// 객체 생성 방법1
// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);    
console.log(foo);

// 참고
// class Foo {
//     String name;
//     int age;
//     String gender;

//     public Foo(String name, int age, String gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// Foo foo = new Foo('foo', 30, 'male');

// Object(): 객체 wrapper 생성 
// 상세설명 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object