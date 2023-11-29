import { fromEvent, pairwise, map } from 'rxjs';


//发射上一值和当前值
const clicks = fromEvent(document, 'click');
const pairs = clicks.pipe(pairwise());
const distance = pairs.pipe(
  map(([first, second]) => {
    const x0 = first.clientX;
    const y0 = first.clientY;
    const x1 = second.clientX;
    const y1 = second.clientY;
    return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  })
);

distance.subscribe(x => console.log(x));