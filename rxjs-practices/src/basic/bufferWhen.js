//bufferWhen,当innerObservable发出消息时，关闭当前缓存，抛出数据，打开新缓存，重复这个过程
import { fromEvent, bufferWhen, interval,Observable } from 'rxjs';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(
  bufferWhen(() => interval(1000 + Math.random() * 4000))
);
buffered.subscribe(x => console.log(x));