function distinguishable(i) {
 return i !== i + 1;
}
function find(lo, hi) {
 if (hi - lo <= 1) {
 return lo;
 } else {
 /* YOUR SOLUTION */
 const mid = math_floor((lo + hi) / 2);
const pot = math_pow(2, mid);
return distinguishable(pot)
 ? find(mid, hi)
 : find(lo, mid);
 }
}

find(0, 10);