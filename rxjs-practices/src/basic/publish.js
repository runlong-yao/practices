import { of } from 'rxjs';
import { publish } from 'rxjs/operators';

// 创建一个 Observable
const source$ = of(1, 2, 3);

// 使用 publish 操作符创建一个可连接的 Observable
const shared$ = source$.pipe(publish());

// 在多个地方订阅 shared$ Observable
shared$.subscribe(value => console.log(`Subscriber 1: ${value}`));
shared$.subscribe(value => console.log(`Subscriber 2: ${value}`));

setTimeout(() => {
    //只在connect的时候执行
    shared$.connect();
},1000)

// 调用 connect 方法开始 shared$ Observable 的执行
