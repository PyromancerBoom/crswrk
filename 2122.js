function repeat(v, k){
    // Makes a list of v, k times
    return k === 0
        ? null
        : pair(v, repeat(v, k-1));
}

/*
repeat(10, 5); // returns list(10, 10, 10, 10, 10)
repeat(10, 0); // returns null
repeat("abc", 3); // returns list("abc", "abc", "abc")
*/

