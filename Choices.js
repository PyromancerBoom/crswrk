function foo(k) {
    // your answer here
    function choice(n){
        if(n === 0){
            return 0;
        } else if (n === 1) {
            return 1;
        } else if (n === 2) {
            return 2;
        } else if (n === 3) {
            return 3;
        } else if (n === 4) {
            return 4;
        } else {
            return null;
        }
    }
    
    return t => choice(t);
}

const j = foo(100);

j(0);
j(1);
j(2);
j(4);
j(5);