// RxJS v6+
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

// Reduces the values from source observable to a single value that's emitted when the source completes.
//source complete的时候触发

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe = example.subscribe(val => console.log('Sum:', val));