import { defer, fromEvent, interval } from 'rxjs';

// Creates an Observable that, on subscribe, calls an Observable factory to make an Observable for each new Observer.
//每有一个observer的时候，都会触发defer的回调函数，返回一个新的Observable

const clicksOrInterval = defer(() => {
  return Math.random() > 0.5
    ? fromEvent(document, 'click')
    : interval(1000);
});
clicksOrInterval.subscribe(x => console.log(x));

// Results in the following behavior:
// If the result of Math.random() is greater than 0.5 it will listen
// for clicks anywhere on the "document"; when document is clicked it
// will log a MouseEvent object to the console. If the result is less
// than 0.5 it will emit ascending numbers, one every second(1000ms).