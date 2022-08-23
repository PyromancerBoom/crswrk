import {square, beside_frac, stack_frac, beside, heart, blank, stack, circle, ribbon, show} from "rune";

// Recursive
// O(n) Space Complexity

function moony_1(rune){
    return beside(stack(rune, square), stack(blank, ribbon));
}

function moony_2(rune, n){
    return n === 1
        ? rune
        : beside(stack(rune, square), stack(blank, moony_2(rune, n-1)));
}

function moony(rune, n){
    return n === 1
        ? rune
        : beside_frac(1/n, stack_frac(1/n , rune, square), 
        stack_frac(1/n, blank, moony(rune, n-1)));
}

// show(moony_1(circle));
// show(moony_2(circle, 5));
show(moony(circle, 5));
