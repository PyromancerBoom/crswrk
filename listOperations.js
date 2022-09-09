const xs = list(1,2,3,4,5);
const n = list();

function append(xs, ys){
    return is_null(xs)
        ? ys
        : pair(head(xs), append(tail(xs), ys));
}

function reverse_iter(original, reversed){
    return is_null(original)
        ? reversed
        : reverse_iter(tail(original),
            pair(head(original), reversed));
}

