import { fromEvent, interval, buffer } from 'rxjs';

//缓存数据，当clicks发射，它会抛出缓存的数据
const clicks = fromEvent(document, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));