import { of } from 'rxjs';
import { zipWith } from 'rxjs/operators';

//合并observable，会在最短的observable结束时停止


const source$ = of(1, 2, 3);
const secondSource$ = of(4);

const result$ = source$.pipe(
    zipWith(secondSource$)
);

result$.subscribe(x => console.log(x));  // Output: [1, 4], [2, 5], [3, 6]

// zipAll是针对高阶observable的