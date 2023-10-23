// 내가 푼 답

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});


// 좋은 정답이 있다면?

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
})

// odd 와 even 은 변수이고 is는 상수 임으로 좋은 코드라고 생각합니다. 다음 코드엔 적용할 수 있도록 생각하면서 풀어보도록하겠습니다.
