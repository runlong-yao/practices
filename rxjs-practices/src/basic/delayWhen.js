import { fromEvent, delayWhen, interval } from 'rxjs';

//为每个source值产生一个observable，当这个observable完成时，发出source值

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(
  delayWhen(() => interval(Math.random() * 5000))
);
delayedClicks.subscribe(x => console.log(x));