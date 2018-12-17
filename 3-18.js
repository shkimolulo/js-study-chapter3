// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorsObj 객체
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);
// 대괄호 안에 문자열 형태로 쓰지 않아도 엔진이 [] 연산자 내 숫자를 자동으로 문자열로 바꿔주어 정상적으로 출력됩니다.

// typeof 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorsObj);

// length 프로퍼티
console.log(colorsArray.length);
console.log(colorsObj.length);

// 배열 표준 메서드
colorsArray.push('red');
// colorsObj.push('red');   
// 객체는 Object.prototype, 배열은 배열 표준 메서드를 포함하는 Array.prototype 객체가 프로토타입이어서 object는 push()가 없어서 에러가 발생합니다.
// Array.prototype의 프로토타입은 Object.prototype입니다.

// 참고
// object는 length 프로퍼티를 갖고 있지 않아 별도로 length를 구하는 함수를 생성해야 합니다.
function count(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

console.log(count(colorsObj));