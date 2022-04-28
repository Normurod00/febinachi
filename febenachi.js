var n = prompt('?');
var fbn = [1, 1];


for (i = 2; i < n; i++) {

    fbn[i] = fbn[i - 1] + fbn[i - 2];
}

console.log(fbn.slice(0, n));
