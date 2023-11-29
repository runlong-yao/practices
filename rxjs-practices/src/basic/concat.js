//concat将observable串行
//concat(a$, b$, c$) is the same as a$.pipe(concatWith(b$, c$)).
//concatWith其实是一种变种写法


import { interval, take, range, concat } from 'rxjs';

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));


// import { fromEvent, map, mergeScan, of } from 'rxjs';

const click$ = fromEvent(document, 'click');
const one$ = click$.pipe(map(() => 1));
const seed = 0;
const count$ = one$.pipe(
  mergeScan((acc, one) => of(acc + one), seed)
);


// Results:
// 1
// 2
// 3
// 4
// ...and so on for each click

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10