import { fromEvent, find } from 'rxjs';

//find会在第一个复合传入函数的值时发射
const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(find(ev => (ev.target).tagName === 'DIV'));
result.subscribe(x => console.log(x));