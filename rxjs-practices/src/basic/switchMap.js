// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//将source产生的每个值，都投影成新的Observable，并且取消上一个Observable的订阅
//switchAll的入参是一个Observable，
//而switchMap的入参是一个值,通过map方法转为observable

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);