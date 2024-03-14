const g = n => n + 1;
const f = n => n * 2;
const h = x => f(g(x));
h(20); //=> 42


const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);


const g = n => n + 1;
const f = n => n * 2;
// replace `x => f(g(x))` with `compose(f, g)`
const h = compose(f, g);
h(20); //=> 42
