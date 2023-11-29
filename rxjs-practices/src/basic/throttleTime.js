// 从源 Observable 发出一个值，然后在几毫秒内 duration 忽略后续源值，然后重复此过程

import { fromEvent, throttleTime } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));

result.subscribe(x => console.log(x));