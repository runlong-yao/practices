import { fromEvent, delay } from 'rxjs';

//延迟一个时间，完成。如果是数字那就是指定时间，如果是日期就是指定日期触发
const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));