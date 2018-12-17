function showPrototype(obj){
    console.log(obj.prototype.ultraProp);
    console.log(obj.prototype.superProp);
    console.log(obj.prototype.subProp);
    console.log("\n");
}

function Ultra(){}
Ultra.prototype.ultraProp = "ultraProp";
showPrototype(Ultra);

function Super(){}
// Super.prototype = new Ultra();
Super.prototype = Ultra.prototype;
Super.prototype.superProp = "superProp";
showPrototype(Ultra);

function Sub(){}
// Sub.prototype = new Super();
Sub.prototype = Super.prototype;
Sub.prototype.subProp = "subProp";
showPrototype(Ultra);

var o = new Sub();
console.log(o.ultraProp);
console.log(o.superProp);
console.log(o.subProp);

// 설명
// Super.prototype = new Ultra(); => (O)
// Ultra.prototype의 원형으로 하는 객체가 생성되기 때문에 new Ultra()를 통해 만들어진 객체에 변화가 생겨도 Ultra.prototype의 객체에는 영향을 주지 않습니다.
// Super.prototype = Ultra.prototype; => (X)
// Super.prototype의 객체가 변경되면 Ultra.prototype의 객체도 변경되므로 new 연산자를 사용해서 객체를 상속받아야 합니다.