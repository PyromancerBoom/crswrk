function remove_duplicates(xs){
    return accumulate((x, ys) => is_null(member(x, ys))
        ? pair(x, ys)
        : ys, null, xs);
}

function remove_duplicates_filter(lst){
    return is_null(lst)
        ? null
        : pair(head(lst),
    (remove_duplicates_filter(filter ( x => !equal(x, head(lst)), tail(lst)))));
}

const testCase = list(1,2,3,4,4,3,2,1,0,0,-1);

remove_duplicates(testCase);