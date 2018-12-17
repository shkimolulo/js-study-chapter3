var a = 100;
var objA = { value: 100 };

function changeArg(num, obj){
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);

// 설명
// 값에 의한 호출(Call By Value): 기본 타입의 값을 함수의 인자로 넘길 경우 복사된 값이 전달됩니다.
// 참조에 의한 호출(Call By Reference): 참조 타입의 값을 함수의 인자로 넘길 경우 객체를 참조하는 값이 전달되어 같은 곳을 가리키게 됩니다.
// num의 값에 a의 값인 100이 복사되고, objA가 가리키고 있는 객체를 참조하는 값이 전달되어 값이 changeArg에서 값을 변경할 경우 obj에만 영향을 미칩니다.
