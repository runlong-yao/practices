import { fromEvent, timestamp } from 'rxjs';

//给每个source附加一个timestamp

const clickWithTimestamp = fromEvent(document, 'click').pipe(
  timestamp()
);

// Emits data of type { value: PointerEvent, timestamp: number }
clickWithTimestamp.subscribe(data => {
  console.log(data);
});