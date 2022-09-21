// Insertion Sort
// Runtime : O(n^2)

function insert(x, xs){
    return is_null(xs)
        ? list(x) // If empty
        : x <= head(xs) // Checking since list is not empty
        ? pair(x, xs) // Put x in front if its smaller than the tail
        : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs){
    return is_null(xs)
        ? xs
        : insert(head(xs), insertion_sort(tail(xs)));
}