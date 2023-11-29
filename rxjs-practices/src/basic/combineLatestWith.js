import { fromEvent, combineLatestWith, map } from 'rxjs';

//合并observable，当这些observable发生改变，会抛出所有最新的值
// 这是一个有用的运算符，用于根据更改的输入急切地计算值。
//是combineLatestWith的变种

// Setup: Add two inputs to the page
const input1 = document.createElement('input');
document.body.appendChild(input1);
const input2 = document.createElement('input');
document.body.appendChild(input2);
const input3 = document.createElement('input');
document.body.appendChild(input3);

// Get streams of changes
const input1Changes$ = fromEvent(input1, 'change');
const input2Changes$ = fromEvent(input2, 'change');
const input3Changes$ = fromEvent(input3, 'change');


// Combine the changes by adding them together
input1Changes$.pipe(
  combineLatestWith(input2Changes$,input3Changes$),
  map(([e1, e2,e3]) => (e1.target).value + ' - ' + (e2.target).value+'-' + e3.target.value)
).subscribe(x => console.log(x));