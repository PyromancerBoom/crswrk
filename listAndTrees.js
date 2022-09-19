// Implmentation of Map
function map(f, xs){
    return is_null(xs)
        ? null
        : pair(f(head(xs)), map(f, tail(xs)));
}



function reverse(xs){
    function rev(original, reversed){
        return is_null(original)
            ? reversed
            : rev(tail(original),
                pair(head(original), reversed));
    }
    return rev(xs, null);
}