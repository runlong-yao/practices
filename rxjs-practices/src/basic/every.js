// RxJS v6+
import { every } from 'rxjs/operators';
import { of } from 'rxjs';

//判断source的值是否满足传入方法的条件
// 发出5个值
const source = of(1, 2, 3, 4, 5);
const example = source.pipe(
  // 每个值都是偶数吗？
  every(val => val % 2 === 0)
);
// 输出: false
const subscribe = example.subscribe(console.log);
