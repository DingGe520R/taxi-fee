


module.exports = function main(kilometer, stoptime) {

    var sum = 0;
    if (kilometer <= 2) {
        sum = 6;
    }
    else if (kilometer <= 8 && kilometer >= 2) {
        sum += 6 + ((kilometer - 2) * 0.8);
    }
    else if (kilometer > 8) {
        var a = kilometer - 8;
        var b = kilometer - a - 2;
        sum += 6 + (a * 1.2) + (b * 0.8);
    }
    sum += stoptime * 0.25;
    return Math.round(sum);
};