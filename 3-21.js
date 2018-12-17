var arr = ['zero', 'one', 'two'];
arr.color = 'blue';
arr.name = 'number_array';
arr[3] = 'red';

for (var prop in arr){
    console.log(prop, arr[prop]);
}
// 배열 arr과 동적으로 추가한 프로퍼티가 모두 출력됩니다.

for (var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}
// 배열 arr에서 프로퍼티를 제외하고 요소만 출력됩니다.