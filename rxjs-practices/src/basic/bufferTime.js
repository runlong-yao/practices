//缓存点击一段时间，时间由第一个参数指定

//bufferCreationInterval存在，则会在这个时间点开启新缓存，在bufferTimeSpan时重置缓存
//当maxBufferSize被指定，则也可在到达maxBufferSize时，触发关闭缓存
import { fromEvent, bufferTime } from 'rxjs';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe(x => console.log(x));


// import { fromEvent, bufferTime } from 'rxjs';

// //
// const clicks = fromEvent(document, 'click');
// const buffered = clicks.pipe(bufferTime(2000, 5000));
// buffered.subscribe(x => console.log(x));