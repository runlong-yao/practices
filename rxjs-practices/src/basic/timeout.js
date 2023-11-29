import { interval, timeout, throwError } from 'rxjs';

class CustomTimeoutError extends Error {
  constructor() {
    super('It was too slow');
    this.name = 'CustomTimeoutError';
  }
}

const slow$ = interval(900);

slow$.pipe(
  timeout({
    //源值之间的跨度
    each: 1000,
    //第一个值到达的时间
    // first
    //超时错误的工厂方法
    with: () => throwError(() => new CustomTimeoutError())
  })
)
.subscribe({
  error: console.error
});