// Selection Sort
/*
Find the smallest element x and remove it from the list
Sort the remaining list, and put x in front
*/

function smallest(xs){
    return accumulate((x,y) => x < y ? x : y,
                        head(xs), tail(xs));
}

function selection_sort(xs){
    if(is_null(xs)){
        return xs;
    } else {
        const x = smallest(xs);
        return pair(x, selection_sort(remove))
    }
}