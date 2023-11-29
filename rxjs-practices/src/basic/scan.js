// RxJS v6+
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

//每有一个source数据，就会做一次reduce计算
const source = of(1, 2, 3);
// basic scan example, sum over time starting with zero
const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// log accumulated values
// output: 1,3,6
const subscribe = example.subscribe(val => console.log(val));

//scan会从不间断从源获取值，然后发射累计值
//reduce会等待源 Observable 完成，然后将累积器函数应用于所有源值，以得到一个单一的累积结果