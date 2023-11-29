//将高阶observables转换串行输出
import { fromEvent, map, interval, take, concatAll } from 'rxjs';

const clicks = fromEvent(document, 'click');
//一次点击产生一个observable
//concatAll将依次合并内部observable,即等内部observable完成合并下一个observable
//concatAll是按次合并
const higherOrder = clicks.pipe(
  map(() => interval(1000).pipe(take(4)))
);
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3