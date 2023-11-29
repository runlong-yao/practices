// RxJS v6+
import { timer, interval } from 'rxjs';
import { window, scan, mergeAll } from 'rxjs/operators';


//根据window传入的observable，划分window,每次划分都会返回一个新的observable
//这个observable里包含子observables
// It's like buffer, but emits a nested Observable instead of an array.


//emit immediately then every 1s
import { fromEvent, interval, window, map, take, mergeAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const sec = interval(1000);
const result = clicks.pipe(
  window(sec),
  //窗口
  map(win => win.pipe(take(2))), // take at most 2 emissions from each window
  mergeAll()                     // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));


//windowCount是用数量来划分window