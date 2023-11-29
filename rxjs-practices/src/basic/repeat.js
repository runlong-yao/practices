// 重复源上发出的所有值。这就像 retry ，但对于非错误情况

import { of, repeat } from 'rxjs';

const source = of('Repeat message');
const result = source.pipe(repeat(3));

result.subscribe(x => console.log(x));

// Results
// 'Repeat message'
// 'Repeat message'
// 'Repeat message'

