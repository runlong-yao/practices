import { interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';


//只有当多个observable都有值时才会发射,
//会获取其它个observable最近发射的值

const source$ = interval(5000);
const secondSource$ = interval(1000);

// const result$ = source$.pipe(
//     withLatestFrom(secondSource$)
// );

const result$ = secondSource$.pipe(
    withLatestFrom(source$)
);
result$.subscribe(([first, second]) => {
    console.log(`Source emitted: ${first}`);
    console.log(`Second source latest value: ${second}`);
});