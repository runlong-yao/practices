// RxJS v6+
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Sarah', age: 35 }
]);
//获取属性的值
//grab names
const example = source.pipe(pluck('name'));
//output: "Joe", "Sarah"
const subscribe = example.subscribe(val => console.log(val));