import { fromEvent, concatMap, interval, take,tap } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
    //串联observable
  concatMap(ev => 
    //原始值变为时间操作，并且只能抛出4个数
    interval(1000).pipe(take(4))
)
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3