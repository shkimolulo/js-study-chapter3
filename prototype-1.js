function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);

// 참고
// console.log(o.constructor);
// console.log(o.hasOwnProperty('ultraProp'));
// console.log(Object.getPrototypeOf(o));
// console.log(Ultra.prototype.isPrototypeOf(o));
// console.log(o.propertyIsEnumerable('ultraProp'));
//
// var date1 = new Date(Date.now());
// console.log(date1.toLocaleString('en-GB'));
// console.log(date1.toLocaleString('ko-KR'));
//
// console.log(o.toString());
// Sub.prototype.toString = function oToString(){
//     var result = "toString을 override 할 수 있습니다. ";
//         return result;
//         }
//         console.log(o.toString());
//
//         // console.dir(foo)
//         //  __proto__:
//         //      constructor: 자신 객체의 생성자 유형을 나타냅니다.
//         //      hasOwnProperty: 프로포티의 존재여부를 확인할 수 있습니다.
//         //      getPrototypeOf: 자신 객체의 프로토타입을 반환합니다. 
//         //      isPrototypeOf: 프로토타입 체인에 해당 객체가 존재하는지 확인합니다.
//         //      propertyIsEnumerable: for ~ in 루프를 이용해 열거가 가능한지 확인하고 상속받은 속성은 false를 반환합니다.
//         //      toLocaleString: 객체로 된 문자열을 반환하는데 지역별로 재정의되어 표시됩니다.
//         //      toString: 객체를 나타내는 문자열을 반환합니다.
//         //      valueOf: 특정 객체의 원시값을 반환합니다.
//         //      __defineGetter__: get 프로퍼티를 정의합니다.    예) o.__defineGetter__('getOne', function() { return 1; });
//         //      __defineSetter__: set 프로퍼티를 정의합니다.    예) o.__defineSetter__('value', function(val) { this.anotherValue = val; });    o.value = 1;
//         //      __lookupGetter__: get 프로퍼티인지 확인하여 아니면 undefined를 반환합니다.   예) obj.__lookupGetter__('name');
//         //      __lookupSetter__: set 프로퍼티인지 확인하여 아니면 undefined를 반환합니다.   예) obj.__lookupSetter__('setFoo')
//
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
//
//         // 설명
//         // Ultra <- Super <- Sub 구조로 상속받습니다.
//         // o.ultraProp을 출력할 때 다음과 같은 과정으로 수행됩니다.
//         // 1. 객체 o에서 ultraProp를 찾습니다.
//         // 2. 없다면 Sub.prototype.ultraProp를 찾습니다.
//         // 3. 없다면 Super.prototype.ultraProp를 찾습니다.
//         // 4. 없다면 Ultra.prototype.ultraProp를 찾는다.
