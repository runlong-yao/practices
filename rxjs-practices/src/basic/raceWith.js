import { of, race } from 'rxjs';
import { delay, raceWith } from 'rxjs/operators';

const obs1 = of('first').pipe(delay(100));
const obs2 = of('second').pipe(delay(50));
const obs3 = of('third').pipe(delay(200));

const result$ = obs1.pipe(raceWith(obs2, obs3));

result$.subscribe(value => console.log(value));
// 输出：'second'

// 在这个例子中，我们创建了三个 Observable，它们分别在 100ms、50ms 和 200ms 后发出值。然后我们使用 raceWith 选择了第一个发出值的 Observable。因此，输出的结果是 'second'，因为 obs2 是第一个发出值的 Observable。