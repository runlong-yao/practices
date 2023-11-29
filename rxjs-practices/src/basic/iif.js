import { iif, of } from 'rxjs';

//iif根据第一个参数的布尔值来决定订阅哪个Observable

let subscribeToFirst;
const firstOrSecond = iif(
  () => subscribeToFirst,
  of('first'),
  of('second')
);

subscribeToFirst = true;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// 'first'

subscribeToFirst = false;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// 'second'