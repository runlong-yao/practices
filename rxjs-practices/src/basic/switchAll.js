import { fromEvent, tap, map, interval, switchAll } from 'rxjs';


//处理高阶Observable，当第一个Observable发出时，就订阅最新的内部Observable，当有新的Observable发出时，就取消订阅前一个Observable
//switchAll是合并最新的observable
const clicks = fromEvent(document, 'click');
const source = clicks.pipe(map(() => interval(1000)));

source
  .pipe(switchAll())
  .subscribe(x => console.log(x));

// Output
// click
// 0
// 1
// 2
// 3
// ...
// click
// 0
// 1
// 2
// ...
// click
// ...