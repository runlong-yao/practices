import { of } from 'rxjs';
import { map, zipAll } from 'rxjs/operators';


//zipAll收集高阶 Observable 中的所有 Observables 的每个值，然后将它们合成数组发出
// 创建一个发出 Observables 的 Observable
const source$ = of(
  of(1, 2, 3),
  of(4, 5, 6),
  of(7, 8, 9)
);


// 使用 zipAll 将内部 Observables 的值组合成数组
const result$ = source$.pipe(
  zipAll()
);

// 订阅并打印值
result$.subscribe(console.log);