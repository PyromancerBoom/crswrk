function factorial(n) {
        return help(1,1,n);
}

function help(counter, result, num){
    return counter > num 
            ? result
            : help(counter + 1, result*counter, num);
}

factorial(10);
