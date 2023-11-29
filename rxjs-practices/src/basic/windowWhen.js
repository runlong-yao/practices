// RxJS v6+
import { interval, timer } from 'rxjs';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';

//windowWhen每隔5秒创建一个新的窗口，关闭旧窗口
//windowWhen和windowTime最大区别是windowWhen可以使用任何observable创建窗口
//emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(
  //close window every 5s and emit observable of collected values from source
  windowWhen(() => interval(5000)),
  tap(_ => console.log('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    //window emits nested observable
    mergeAll()
    /*
      output:
      "NEW WINDOW!"
      0
      1
      2
      3
      4
      "NEW WINDOW!"
      5
      6
      7
      8
      9
    */
  )
  .subscribe(val => console.log(val));