import { Subject, isEmpty } from 'rxjs';

isEmpty将一个发出值的Observable转换为一个发出单个布尔值的Observable，表示源Observable是否发出了任何值。一旦源Observable发出一个值，isEmpty将发出一个false并完成。如果源Observable在没有发出任何值的情况下完成，isEmpty将发出一个true并完成。
//isEmpty如果
const source = new Subject<string>();
const result = source.pipe(isEmpty());

source.subscribe(x => console.log(x));
result.subscribe(x => console.log(x));

source.next('a');
source.next('b');
source.next('c');
source.complete();

// Outputs
// 'a'
// false
// 'b'
// 'c'