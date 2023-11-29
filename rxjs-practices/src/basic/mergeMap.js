// RxJS v6+
import { of, range } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

//mergeMap:投射每个原始值变为一个Observable,Observable已经合并到了输出Observable
//mergeMap的第三个参数指定了同时执行的observable数量
//如果每次仅有一个订阅，应该使用switchMap
//如果对抛出和订阅的顺序有要求，应该使用concatMap
//what is subscription

// helper to create promise
const myPromise = val =>{
    
    return new Promise(resolve => {
        console.log(`${val} start running`);
        
        setTimeout(() => {
            resolve(`${val} resolved!`)
        },1000)
    })
}

// emit 'Hello'
const source$ = range(1,10);

// map to promise and emit result
source$
  .pipe(mergeMap(val => myPromise(val),
  //同时被输出Observable订阅的最大数量
  2))
  // output: 'Hello World From Promise'
  .subscribe(val => console.log(val));