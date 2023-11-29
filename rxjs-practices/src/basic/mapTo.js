// RxJS v6+
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
//转换成一个固定值

//emit value every two seconds
const source = interval(2000);
//map all emissions to one value
const example = source.pipe(mapTo('HELLO WORLD!'));
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));