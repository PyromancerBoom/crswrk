function pascal(row, pos){
    return pos === 0
        ? 1
        : row === 0
        ? 0
        : pascal(row-1, pos) + pascal(row-1, pos-1);
}

// Test Cases
display(pascal(4,3));