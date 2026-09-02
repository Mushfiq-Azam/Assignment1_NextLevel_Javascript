
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



console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));