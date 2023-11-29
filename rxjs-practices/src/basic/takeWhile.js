// 发出源 Observable 发出的值，只要每个值满足给定 predicate 的值，然后在不满足时 predicate 立即完成。

import { fromEvent, takeWhile } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(takeWhile(ev => ev.clientX > 200));
result.subscribe(x => console.log(x));