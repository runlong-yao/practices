import { interval } from 'rxjs';
import { take, shareReplay } from 'rxjs/operators';

// shareReplay 是 RxJS 中的一个操作符，它的作用是使多个订阅者共享同一个 Observable 执行，并且可以重播（replay）Observable 的最后几个值。

// shareReplay 接收一个参数，这个参数决定了重播的值的数量。例如，shareReplay(3) 会重播源 Observable 的最后 3 个值。

// 当一个新的订阅者订阅这个 Observable 时，它会立即接收到源 Observable 的最后几个值（数量由 shareReplay 的参数决定）。然后，这个新的订阅者会继续接收源 Observable 的后续值。

const source$ = interval(1000).pipe(
    take(5),
    shareReplay(2)
);

source$.subscribe(x => console.log('subscription 1: ', x));

setTimeout(() => {
    source$.subscribe(x => console.log('subscription 2: ', x));
}, 3000);