import { interval, merge, of,mergeAll } from 'rxjs';


//功能和mergeWith类似，但merge是一个创建操作符
//同时接收内部observable发射的值，然后把它们发射出去

const first = interval(1000);
const second = of(4, 5, 6);
const merged = merge(first, second);

merged.subscribe(x => console.log(x));
// 输出：1, 2, 3, 4, 5, 6


// 创建操作符：这些操作符用于创建新的 Observable。例如：of、from、interval、timer 等。

// 转换操作符：这些操作符用于将 Observable 的值转换为其他形式。例如：map、buffer、concatMap、switchMap 等。

// 过滤操作符：这些操作符用于选择性地只发出 Observable 的某些值。例如：filter、first、last、skip 等。

// 组合操作符：这些操作符用于将多个 Observable 组合成一个 Observable。例如：merge、concat、zip、combineLatest 等。

// 多播操作符：这些操作符用于使一个 Observable 可以被多个观察者共享。例如：multicast、publish、share 等。

// 错误处理操作符：这些操作符用于处理 Observable 的错误。例如：catchError、retry、retryWhen 等。

// 辅助操作符：这些操作符用于执行一些辅助操作，例如：tap（用于调试）、delay（用于延迟发出值）等。

// 条件和布尔操作符：这些操作符用于处理 Observable 的值并返回一个布尔结果。例如：every、find、isEmpty 等。

// 数学和聚合操作符：这些操作符用于对 Observable 的值进行数学或聚合操作。例如：count、max、min、reduce 等。

// 连接操作符：这些操作符用于控制 Observable 的订阅。例如：connect、subscribeOn、observeOn 等。

