import { forkJoin, of, timer } from 'rxjs';

//接收多个数组或对象，会等待所有值完成后，收集最后抛出的值做为结果，以数组或者对象的方式抛出，
//如果输入的项产生错误将立即停止并报错

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000)
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// 'This is how it ends!' immediately after