//https://github.com/farhanshahriyar/Javascript-

// kilometerToMeter

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}

var resultMeter = kilometerToMeter(1);
console.log(resultMeter);



// budgetCalculator 

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 250;
    var phonePrice = phone * 24500;
    var laptopPrice = laptop * 600000;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
}

var budgetResult = budgetCalculator(1,2,3);
console.log(budgetResult);