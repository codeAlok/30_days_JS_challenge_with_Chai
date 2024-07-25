// *** Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script. ***

function getProducts(num1, num2){
    return (num1* num2);
}

function getQuotient(num1, num2) {
    if(num2 == 0){
        return 0;
    }else{
        return (num1/num2);
    }
}

const getSubValue = (num1, num2) => {
    return (num1 - num2);
}

const checkEvenOdd = (num) => {
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

export { getProducts, getQuotient, getSubValue, checkEvenOdd };