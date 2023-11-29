//takeUntil将源头的数据抛给观察者，直到clicks抛出数据 
import { interval, fromEvent, takeUntil } from 'rxjs';

const source = interval(1000);
const clicks = fromEvent(document, 'click');
const result = source.pipe(takeUntil(clicks));
result.subscribe(x => console.log(x));