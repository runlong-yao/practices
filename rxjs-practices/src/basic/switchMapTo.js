// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import {
  switchMapTo,
  scan,
  startWith,
  takeWhile,
  finalize
} from 'rxjs/operators';

const COUNTDOWN_TIME = 10;


//取消上一个observable的订阅，开始下一个
// streams
const click$ = fromEvent(document, 'click');
const countdown$ = interval(1000).pipe(
  scan((acc, _) => --acc, COUNTDOWN_TIME),
  startWith(COUNTDOWN_TIME)
);

click$
  .pipe(
    switchMapTo(countdown$),
    takeWhile(val => val >= 0),
    finalize(() => console.log("finished"))
  )
  .subscribe(console.log);