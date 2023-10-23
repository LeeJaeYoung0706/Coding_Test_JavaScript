// 내 풀이

function solution(my_string, k) {
    var answer = '';
    const arrayEmpty = new Array(k);
    return arrayEmpty?.fill(my_string).reduce((value1, value2) => value1+value2);
}

// 다른 사람 풀이

function solution(my_string, k) {
    return my_string.repeat(k)
}

// repeat 함수에 대해 공부
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

// 문자열을 반복하여 새로운 문자열 반환
