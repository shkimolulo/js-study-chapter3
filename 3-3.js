// str 문자열 생성
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);    

// 문자열의 첫 글자를 대문자로 변경 시도
str[0] = 'T';
console.log(str); 

// 참고
str = str.charAt(0).toUpperCase() + str.slice(1);   // 문자열의 첫 글자를 대문자로 변경합니다. 
console.log(str);