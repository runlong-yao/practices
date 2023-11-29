import { fromEvent, elementAt } from 'rxjs';

//在指定数量时发射

//第三下的时候发射
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(elementAt(2));
result.subscribe(x => console.log(x));

// Results in:
// click 1 = nothing
// click 2 = nothing
// click 3 = MouseEvent object logged to console