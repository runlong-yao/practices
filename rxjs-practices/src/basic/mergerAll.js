import { fromEvent, map, interval, mergeAll } from 'rxjs';


//mergeAll会从所有内部observable中获取值,谁先发出谁先输出
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map(() => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());

firstOrder.subscribe(x => console.log(x));