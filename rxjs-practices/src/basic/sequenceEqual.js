import { from, fromEvent, map, bufferCount, mergeMap, sequenceEqual } from 'rxjs';

const codes = from([
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
  'Enter', // no start key, clearly.
]);

const keys = fromEvent<KeyboardEvent>(document, 'keyup').pipe(map(e => e.code));
const matches = keys.pipe(
    //不断缓存按键值，直到11,然后发射
  bufferCount(11, 1),
  //发射的按键值，和codes的值进行比较，如果匹配发射true
  mergeMap(last11 => from(last11).pipe(sequenceEqual(codes)))
);
matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));