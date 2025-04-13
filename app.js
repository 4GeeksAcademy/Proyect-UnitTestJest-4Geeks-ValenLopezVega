const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

function fromDollarToYen(dollars){
    const euros = dollars * 1.07;
    const yen = euros * 156.5;
    return yen;
}

function fromEuroToDollar(euros) {
    const dollars = euros * 1.07;
    return dollars;
}

function fromYenToPound(yen) {
    const euros = yen / 156.5; 
    const pounds = euros * 0.87; 
    return pounds;
}



module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};