import { of, ignoreElements } from 'rxjs';

//ignoreElements忽略所有next，只发射error和complete

of('you', 'talking', 'to', 'me')
  .pipe(ignoreElements())
  .subscribe({
    next: word => console.log(word),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

// result:
// 'the end'