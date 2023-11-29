import { from, skipWhile } from 'rxjs';

const source = from([1, 2, 3, 4, 5, 6, 7, 9, 10]);
//从第六个开始抛出
const example = source.pipe(skipWhile((_, i) => i !== 5));
// output: 6, 7, 9, 10
example.subscribe(value => console.log(value));