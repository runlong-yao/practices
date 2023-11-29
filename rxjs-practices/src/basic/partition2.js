// RxJS v6+
import { merge, of, from } from 'rxjs';
import { map, partition, catchError } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5, 6]);
//if greater than 3 throw
const example = source.pipe(
  map(val => {
    if (val > 3) {
      throw `${val} greater than 3!`;
    }
    return { success: val };
  }),
  catchError(val => of({ error: val }))
);
//split on success or error
const [success, error] = example.pipe(partition(res => res.success));
/*
  Output:
  "Success! 1"
  "Success! 2"
  "Success! 3"
  "Error! 4 greater than 3!"
*/
const subscribe = merge(
  success.pipe(map(val => `Success! ${val.success}`)),
  error.pipe(map(val => `Error! ${val.error}`))
).subscribe(val => console.log(val));