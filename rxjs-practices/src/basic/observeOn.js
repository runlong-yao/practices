import { of } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';

//改变观察者的回调时间

const source$ = of(1, 2, 3);
const asyncSource$ = source$.pipe(observeOn(asyncScheduler));

console.log('Before subscribe');
asyncSource$.subscribe(value => console.log(value));
console.log('After subscribe');
// 输出：'Before subscribe', 'After subscribe', 1, 2, 3

// 在这个例子中，我们创建了一个 Observable，然后使用 observeOn 指定了观察者在 asyncScheduler 上执行。因此，尽管我们在订阅 Observable 之后立即打印了 'After subscribe'，但是 Observable 的值会在 'After subscribe' 之后打印，因为它们是在异步调度器上执行的。