import { of, groupBy, mergeMap, reduce } from 'rxjs';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
).pipe(
  //按键值生成对应groupedObservable（会带一个key值）
  groupBy(p => p.id),
  //
  mergeMap((group$) => {
    // ObservableInput<数组>
    return group$.pipe(reduce((acc, cur) => [...acc, cur], []))
  }),
  //返回Observable(数组)
)
.subscribe(p => console.log(p));

// displays:
// [{ id: 1, name: 'JavaScript' }, { id: 1, name: 'TypeScript'}]
// [{ id: 2, name: 'Parcel' }, { id: 2, name: 'webpack'}]
// [{ id: 3, name: 'TSLint' }]