import { fromEvent, map, interval, take, exhaustAll } from 'rxjs';


// exhaustAll ignores every new inner Observable if the previous Observable has not yet completed
//exhaustAll会忽略当前observable完成前产生的所有内部observable
//在第一次点击的5秒内不会订阅新的Observable
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(() => interval(1000).pipe(take(5)))
);
const result = higherOrder.pipe(exhaustAll());
result.subscribe(x => console.log(x));