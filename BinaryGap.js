function solution(N) {
    // Implement your solution here
    const binaryVal = N.toString(2);
// we are loop n = binaryVal.length - 2 times (as 2 accounts for the initial and final positions of 1 we are taking off)
// each iteration i represents the number of 0's in the returned zero padded string with leading and ending 1's.
// if the indexOf The padded zeros is in binaryVal string return the index (i) of the current loop and exit from the loop.

    for (let i = binaryVal.length - 2; i > 0; i--) {
        const zeros = padZeroes(i);
        if (binaryVal.indexOf(zeros) !== -1) {
            return i;
        }
    }
// if padded zeroes is not part of the binaryVal, return 0.
    return 0;
}

function padZeroes(len) {
    let zeroes = "";
    for (let i = 0; i < len; i++) {
        zeroes += "0";
    }
    return "1" + zeroes + "1";
}