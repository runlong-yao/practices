//startInterval会开启新buffer的时间，可以开启多个
// closingInterval会在开启buffer时被调用（计时），到达时间后抛出数据
// RxJS v6+
import { interval } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

//emit value every second
const sourceInterval = interval(1000);
//start first buffer after 5s, and every 5s after
const startInterval = interval(5000);
//call closingInterval After 5 sec
//emit value after 3s, closing corresponding buffer

const closingInterval = val => {
  console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
  return interval(3000);
};
//every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
const bufferToggleInterval = sourceInterval.pipe(
  bufferToggle(startInterval, closingInterval)
);

//log to console
//ex. emitted buffers [4,5,6]...[9,10,11]
const subscribe = bufferToggleInterval.subscribe(val =>
  console.log('Emitted Buffer:', val)
);