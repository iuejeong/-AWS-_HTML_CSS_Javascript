let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let numbers3 = new Array();

let numbers4 = numbers1.concat(numbers2);

console.log(numbers1);
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

function odd(num) {
    return num % 2 != 0;
}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

let numbers6 = numbers4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i = 0; i < numbers5.length; i++) {
    console.log("i: " + numbers5[i])
}

for(let num of numbers5) {
    console.log(`forEach: ${num}`);
}

// List<String> list = new ArrayList<String>();
// list.forEach(n -> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

console.log(numbers5.indexOf(5));       // index 번호
console.log(numbers5.lastIndexOf(2));   // index 번호
console.log(numbers5.join(';'))     // index 구분
console.log(numbers5.push(11));     // 값 추가
console.log(numbers5);
console.log(numbers5.unshift(13));  // 첫 번째 값 추가
console.log(numbers5);
console.log(numbers5.pop());        // 젤 마지막 제거
console.log(numbers5);
numbers5.splice(2, 1, 15, 17);      // (~번 인덱스부터, 삭제할 개수, 추가할 값)
console.log(numbers5);
console.log(numbers5.slice(3, 6));   // python에서 (numbers5[3:6])과 동일
console.log(numbers5);

// sort에 적용되는 공식
function compare(n1, n2) {
    if(n1 > n2) return 1;
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
}

console.log(numbers5.sort(compare));

console.log(numbers5.reverse());
console.log(numbers5.toString());   // join은 구분자를 바꿀 수 있고, toString은 쉼표만 취급.

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
    history.back();
}











