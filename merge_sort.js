// Merghe Sort
// time : 
// Space :

// Approach : 
// Split the list in half, sort each half "wishfully"
// Merge the sorted lists together

function mergeSort(xs){
    if(is_null(xs) || is_null(tail(xs))){ // In case of empty list or single element, its already sorted
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(mergeSort(take(xs, mid)), // Sorted left half
                        mergeSort(drop(xs, mid))); // Sorted Right half
    }
    
    // Half, rounded downwards
    function middle(n){
        return math_floor(n/2);
    }
    
    // Put the first n elements of xs into a list
    function take(xs, n){
        return n === 0
            ? null
            : pair(head(xs), take(tail(xs), n-1));
    }
    
    // Drop the first n elements from the list
    // and return the rest
    function drop(xs, n){
        return n === 0
            ? xs
            : drop(tail(xs), n-1);
    }
    
    // Merge Function (Most Important)
    function merge(xs ,ys){
        return is_null(xs)
            ? ys
            : is_null(ys)
                ? xs
                : head(xs) < head(ys)
                    ? pair( head(xs), merge(tail(xs), ys))
                    : pair( head(ys), merge(xs, tail(ys)));
    }

    /*
    function merge(xs, ys){
        if(is_null(xs)){
            return ys;
        } else if(is_null(ys)) {
            return xs;
        } else {
            const x = head(xs);
            const y = head(ys);
            return x < y
                ? pair(x, merge(tail(xs), ys))
                : pair(y, merge(xs, tail(ys)));
        }
    }
    */
}