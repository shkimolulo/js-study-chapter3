function addProperty(obj, numberVal, stringVal){
    obj.numberVal = numberVal;
    obj.stringVal = stringVal;
}

function showObject(obj){
    addProperty(obj, 2, "test");
    console.log("============================================================");
    console.log(Object.keys(obj));
    console.log("typeof "  + obj + " : " + typeof obj);
    console.log("typeof "  + obj + ".numberVal : " + typeof obj.numberVal);
    console.log("typeof "  + obj + ".stringVal : " + typeof obj.stringVal);
    console.log(obj);
}

var stringVar = "stringVar";
showObject(stringVar);

var numVar = 1; 
showObject(numVar);

var booleanVar = true; 
showObject(booleanVar);
// 기본 데이터 타입으로 생성 시 임시 객체 wrapper를 생성하여 값을 할당하지만 지속되지 않아 프로퍼티를 추가할 수 없습니다.

var objVar1 = new Object("objVar1");
showObject(objVar1);

var objVar2 = new Object(1);
showObject(objVar2);

var objVar3 = new Object(true);
showObject(objVar3);
// Object() 생성자를 사용해 참조 데이터 타입으로 생성 시 객체 wrapper(object)를 생성하여 문자열, 숫자, 불린 프로퍼티에 접근하려고 할 때 읽기 전용의 임시 래퍼 객체가 생성됩니다.

// 참고
// https://jongmin92.github.io/2017/01/26/JavaScript/complete-guide-to-javascript-chapter-3/