function sqaure(x){
    return x*x;
}

function is_even(x){
    return x%2==0;
}

// Time complexity = logn
function power(b ,n){
    return n === 0
        ? 1
        : is_even(n)
            ? sqaure(power(b, n/2));
            : b * power(b, n-1);
}