import { fromEvent, throttle, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
//节流，一秒最多一下点击事件被抛出，
//细节：收到点击消息后先抛出，随后一秒内静默不再抛出
const result = clicks.pipe(throttle(() => interval(1000)));

result.subscribe(x => console.log(x));