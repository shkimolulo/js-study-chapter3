var objA = {
    val : 40
};

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
console.log(objA.val);
console.log(objB.val);

// 설명
// objA와 objB는 40을 갖고 있는 val을 가리키고 있는데 그 val의 값을 objA, objB 중 하나에서만 바꾸어도 참조하고 있는 val의 값이 바뀌므로
// objA.val, objB.val의 값이 모두 바뀝니다.