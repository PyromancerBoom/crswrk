function append(xs, ys){
    return is_null(xs)
        ? ys
        : pair(head(xs), append(tail(xs), ys));
}

