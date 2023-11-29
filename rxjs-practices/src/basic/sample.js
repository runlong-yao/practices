


import { fromEvent, interval, sample } from 'rxjs';

const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
//在点击的时候，发射最近获得的值
const result = seconds.pipe(sample(clicks));

result.subscribe(x => console.log(x));