// SIMPLE EXAMPLES: DECREMENT PROBLEM SIZE

// O(n)
function f(n) {
    return n === 0
        ? 0
        : 1 + f(n - 1);
}

// O(n^2)
function g(n) {
    return n === 0
        ? 0
        : head(enum_list(1, n)) + g(n - 1);
}

// O(2^n)
function h(n) {
    return n === 0
        ? 0
        : 1 + h(n - 1) + h(n - 1);
}

// HARDER EXAMPLES: HALVING OF PROBLEM SIZE

// O(log n): 1 recursive call, half problem size, O(1) work per recursion
function i(n) {
    return n === 0
        ? 0
        : 1 + i(n / 2);
}

// O(n): 1 recursive call, half problem size, O(n) work per recursion
function j(n) {
    return n === 0
        ? 0
        : head(enum_list(1, n)) + j(n / 2);
}

// O(n): 2 recursive calls, half problem size, O(1) work per recursion
function k(n) {
    return n === 0
        ? 0
        : 1 + k(n / 2) + k(n / 2);
}

// O(n log n): 2 recursive calls, half problem size, O(n) work per recursion
// Similar to merge sort
function l(n) {
    return n === 0
        ? 0
        : head(enum_list(1, n)) + l(n / 2) + l(n / 2);
}

// TROLL EXAMPLE THAT HAS COME OUT BEFORE

// O(1): Runtime does not depend on input size
function m(n) {
    return n === 0
        ? null
        : accumulate(pair, null, reverse(append(enum_list(1, 1000), list(null))));
}


