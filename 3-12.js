var foo = {
	    name: 'foo',
	    age: 30
};

console.log(foo.toString());

console.dir(foo);

// 설명
// // [[Prototype]]
// // 모든 객체가 가지고 있는 자신의 부모 역할을 하는 프로토타입 객체를 가리키는 숨겨진 프로퍼티입니다.
// // 크롬 브라우저에서는 __proto__ 프로퍼티 형태로 구현되어 있습니다.
