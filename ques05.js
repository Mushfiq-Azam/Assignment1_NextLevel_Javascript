
const getChaseVerdict = (target,scored,ballsLeft) => {
    let runsNeeded = target-scored;

    if(runsNeeded<= 0) {
        return "Won";
    }

    if(ballsLeft<= 0) {
        return"Lost";
    }

    let requiredRate=(runsNeeded/ballsLeft)* 6;
    let v;

    if (requiredRate<= 6) {
        v = "Comfortable";
    } else if (requiredRate<= 12) {
        v ="Tough";
    } else {
        v ="Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${v}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));