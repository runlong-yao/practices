import { of, distinctUntilKeyChanged } from 'rxjs';

//第一参数：比较的键值
//第二参数：比较这个键值的方法
//distinctUntilChanged的一个变种，distinctUntilChanged设置第二个参数也是指定比较哪个属性的值，只不过形式不同

of(
  { age: 4, name: 'Foo1' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo2' },
  { age: 6, name: 'Foo3' }
).pipe(
  distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3))
)
.subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }