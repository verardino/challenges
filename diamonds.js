const SEQUENCE_END = 1000;

for(let i = 1; i <= SEQUENCE_END; i++) {
    printDiamond(i);
    console.log('\n')
};

function printDiamond(n) {
    let dir = 1;
    let output = `${n}.`;

    let i = 1;
    while(i !== 0) {
        output += '\n';

        if(i === 1) {
            output += `${" ".repeat(n-1)}#`;
        } else {
            output += `${" ".repeat(n-i)}#${" ".repeat((2*(i-1))-1)}#`
        }

        if(i === n) dir *= -1;
        i += dir;
    }

    console.log(output);
}