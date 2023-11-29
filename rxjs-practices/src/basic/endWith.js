import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

// 返回一个可观察对象，该可观察对象将从源发出所有值，然后在源完成后立即同步发出提供的值。

of('Hello', 'World').pipe(
  endWith('Goodbye', 'World')
).subscribe(console.log);
// 输出：'Hello', 'World', 'Goodbye', 'World'