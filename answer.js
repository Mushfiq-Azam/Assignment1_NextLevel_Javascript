//Answer of Question No. 1

function describeValue(x){
    let type=typeof x;
    let y;
    if(x){
        y="truthy";
    }else{
        y="falsy";
    }
    return type+"|"+y;
    
}

//Answer of Question No. 2

function getDayType(day_name) {
    let x = day_name.toLowerCase();

    switch (x) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

//Answer of Question No. 3

function validateUsername(name) {

    if (name.length < 4) {
        return "Too Short";
    }

    if (name.includes(" ")) {
        return "No Space Allowed";
    }

    if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {  
    return "Available";
    }
}

//Answer of Question No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let f = 50;

    if (distance > 2) {
        f = f + (distance - 2) * 15;
    }

    f = f + waitingMinutes * 2;

    if (isNight) {
        f = f * 1.20;
    }

    return f;
}

//Answer of Question No. 5

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
