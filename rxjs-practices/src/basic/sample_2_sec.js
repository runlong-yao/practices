// RxJS v6+
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//计算有偏差
//实际值是：1..3..5..7..
const subscribe = example.subscribe(val => console.log(val));