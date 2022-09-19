// TREES ------------------------------------------------------------

//Abstractions

// Map Tree
function map_tree(f , tree){
    return map(sub_tree => !is_list(sub_tree)
        ? f(sub_tree)
        : map_tree(f, sub_tree), tree);
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function scale_tree(tree, factor){
    return map(sub_tree => !is_list(sub_tree)
            ? factor * sub_tree
            : scale_tree(sub_tree, factor), tree);
}
// Using map_tree
function scale_tree(tree, k){
    return map_tree(data_item => data_item * factor, tree);
}


// LISTS ------------------------------------------------------------

// Implmentation of Map
function map(f, xs){
    return is_null(xs)
        ? null
        : pair(f(head(xs)), map(f, tail(xs)));
}

// Abstraction : Filter
function filter(pred, xs){
    return is_null(xs)
        ? null
        : pred(head(xs))
        ? pair(head(xs), filter(pred, tail(xs)))
        : filter(pred, tail(xs));
}

// Abstraction : Accumulate
function accumulate(f, initial, xs){
    return is_null(xs)
        ? initial
        : f(head(xs),
            accumulate(f, initial, tail(xs)));
}

// Take only Even Numbers from a list
function evenNum(xs){
    return is_null(xs)
        ? null 
        : head(xs) % 2 === 0
        ? pair(head(xs), evenNum(tail(xs)))
        : evenNum(tail(xs));
}

// Even numbers using abstraction
function even_numbers(xs){
    return filter(t => t%2 === 0, xs);
}

// List Sum Abstraction
// x => Value opf the head
// y => Value of the result / the tail
function list_sum(xs){
    return accumulate((x,y) => x + y, 0, xs);
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