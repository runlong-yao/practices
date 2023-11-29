import { interval, timeInterval } from 'rxjs';

//timeInterval 是 RxJS 中的一个操作符，它的作用是记录源 Observable 发出连续两个值之间的时间间隔。

const seconds = interval(2000);

seconds
  .pipe(timeInterval())
  .subscribe(value => console.log(value));

// NOTE: The values will never be this precise,
// intervals created with `interval` or `setInterval`
// are non-deterministic.

// { value: 0, interval: 1000 }
// { value: 1, interval: 1000 }
// { value: 2, interval: 1000 }