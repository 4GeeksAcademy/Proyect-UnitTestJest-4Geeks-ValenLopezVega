// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

function fromDollarToYen(dollars){
    const euros = dollars * 1.07;
    const yen = euros * 156.5;
    return yen;
}