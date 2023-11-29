import { of, single } from 'rxjs';

//single只允许有一个值抛出，多或者少会抛出异常

const source1 = of(
 { name: 'Ben' },
 { name: 'Tracy' },
 { name: 'Laney' },
 { name: 'Lily' }
);

source1
  .pipe(single(x => x.name.startsWith('B')))
  .subscribe(x => console.log(x));
// Emits 'Ben'


const source2 = of(
 { name: 'Ben' },
 { name: 'Tracy' },
 { name: 'Bradley' },
 { name: 'Lincoln' }
);

source2
  .pipe(single(x => x.name.startsWith('B')))
  .subscribe({ error: err => console.error(err) });
// Error emitted: SequenceError('Too many values match')


const source3 = of(
 { name: 'Laney' },
 { name: 'Tracy' },
 { name: 'Lily' },
 { name: 'Lincoln' }
);

source3
  .pipe(single(x => x.name.startsWith('B')))
  .subscribe({ error: err => console.error(err) });
// Error emitted: NotFoundError('No values match')