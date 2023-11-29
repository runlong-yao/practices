// 将函数应用于每个源值以及每个输出值。它是递归的。
//EMPTY：EMPTY是一个Observable,会抛出一个完成请求
import { fromEvent, map, expand, of, delay, take } from 'rxjs';

const clicks = fromEvent(document, 'click');
const powersOfTwo = clicks.pipe(
  map(() => 1),
  expand(x => of(2 * x).pipe(delay(1000))),
  take(10)
);
powersOfTwo.subscribe(x => console.log(x));