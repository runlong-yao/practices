// RxJS v6+
import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

interval(100)
//获取10个，转换为数组，然后发射
  .pipe(take(10), toArray())
  .subscribe(console.log);

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]