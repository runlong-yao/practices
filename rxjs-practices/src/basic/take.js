import { interval, take } from 'rxjs';

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe({
    next:x => console.log(x),
    complete: () => console.log('complete')
});

// Logs:
// 0
// 1
// 2
// 3
// 4