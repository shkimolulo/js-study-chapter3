function Ultra(){}
Ultra.prototype.ultraProp = true;
// Ultra 객체 원형의 ultraProp 속성값을 true로 합니다.

function Super(){}
var t = new Ultra();
// t.ultraProp = 4;
Super.prototype = t;
// Super 객체 원형에 ultraProp 속성값을 4로 한 Ultra 객체 t를 대입합니다.

function Sub(){}
var s = new Super();
s.ultraProp = 3;
Sub.prototype = s;
// Sub 객체 원형에 ultraProp 속성값을 3으로 한 Super 객체 s를 대입합니다.

var o = new Sub();
// s를 원형으로 하는 Sub 객체 o를 생성합니다.
console.log(o.ultraProp);
