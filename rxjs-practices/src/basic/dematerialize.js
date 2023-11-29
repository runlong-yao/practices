import {of, dematerialize,type NextNotification } from 'rxjs';

//将Notification转换为原来的值
const notifA:NextNotification<string> = { kind: 'N', value: 'A' };
const notifB = { kind: 'N', value: 'B' };

// const notifE = { kind: 'E', error: new TypeError('x.toUpperCase is not a function') };

const materialized = of(notifA, notifB);

const upperCase = materialized.pipe(dematerialize());
upperCase.subscribe({
  next: x => console.log(x),
  error: e => console.error(e)
});

// Results in:
// A
// B
// TypeError: x.toUpperCase is not a function