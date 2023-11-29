import {count,of} from "rxjs"

//计算完成时发出值的数量
of(1,2,3).pipe(count()).subscribe((value)=>{console.log(value)})

