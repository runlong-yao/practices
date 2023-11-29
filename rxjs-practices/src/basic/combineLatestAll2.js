import { fromEvent, map, interval, take, combineLatestAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
    //如果快速连续点两次，最多可以输出5次
    //如果等待第一次完成后，点第二次，只能输出3次
  map(() => interval(Math.random() * 2000).pipe(take(3))),
  take(2)
);
const result = higherOrder.pipe(combineLatestAll());

result.subscribe(x => console.log(x));