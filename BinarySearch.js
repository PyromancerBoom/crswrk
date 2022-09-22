const N = 100;
const SECRET_NUM = math_floor(math_random() * N) + 1; // 1 to N

display(SECRET_NUM, "SECRET_NUM:");

function check_guess(guess) {
    return guess === SECRET_NUM
           ? "correct"
           : guess < SECRET_NUM
           ? "too low"
           : "too high";
}

function guess_secret_num(start, end) {
    if (start === end) {
        display(start, "Guess:");
        return start;
    } else {
        const guess = math_floor((start + end) / 2);
        const check = check_guess(guess);

        display(guess, "Guess:");

        return check === "correct"
               ? guess
               : check === "too low"
               ? guess_secret_num(guess + 1, end)    // when "too low"
               : guess_secret_num(start, guess - 1); // when "too high"
    }
}

guess_secret_num(1, N);
