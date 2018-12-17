var arr = ['bar'];
var obj = { name : 'foo', length : 1 };

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);

// 설명
// apply()는 모든 함수의 부모 객체인 Function.prototype 객체의 메서드로, 원하는 객체를 명시적으로 매핑해서 특정 함수나 메서드를 호출할 수 있습니다.