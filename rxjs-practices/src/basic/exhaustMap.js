//exhaustMap:仅在之前投影到输出的observable完成时，才会把新输入转换为投影（并合并到输出）
import { fromEvent, exhaustMap, interval, take } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));