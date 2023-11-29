import { interval, firstValueFrom } from 'rxjs';

//将observable转换为promise,只接收第一个发射后结束，因为promise特性是只触发一次
async function execute() {
  const source$ = interval(2000);
  const firstNumber = await firstValueFrom(source$);
  console.log(`The first number is ${ firstNumber }`);
}

execute();