// Implmentation of Map
function map(f, xs){
    return is_null(xs)
        ? null
        : pair(f(head(xs)), map(f, tail(xs)));
}

// Making a copy of a list
function copy(xs){
    return map( t => t, xs);
}

const original = list(1,3,5);
const my_copy = copy(original);



function reverse(xs){
    function rev(original, reversed){
        return is_null(original)
            ? reversed
            : rev(tail(original),
                pair(head(original), reversed));
    }
    return rev(xs, null);
}