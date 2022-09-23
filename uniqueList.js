function unique(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        return head(xs) === head(tail(xs))
            ? unique(tail(xs))
            : pair(head(xs), unique(tail(xs)));
    }
}

unique( list(1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6) );
// returns list(1, 2, 3, 4, 5, 6)