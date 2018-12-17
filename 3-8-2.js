function showAll(){
    console.log("=======showAll=======");
    var prop;
    for (prop in foo) {
        console.log(prop, foo[prop]);
    }
    console.log("=====================");
}

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    nickname: 'babo'
};

showAll();

console.log(foo.nickname);
delete foo.nickname;    // foo 객체의 nickname 프로퍼티 삭제
console.log(foo.nickname);

showAll();

delete foo;    // foo 객체 삭제 시도
console.log(foo.name);

// 참고
// delete 연산자는 메모리 해제를 수행하지 않습니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/delete
// https://medium.com/@laziel/javascript-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%86%8D%EC%84%B1%EC%9D%84-%EC%A0%9C%EA%B1%B0%ED%95%A0-%EB%95%8C-delete-%EC%97%B0%EC%82%B0%EC%9E%90%EB%B3%B4%EB%8B%A4-undefined-%EB%82%98-null-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EA%B2%83%EC%9D%B4-%EB%82%AB%EB%8B%A4-2db597f64514
