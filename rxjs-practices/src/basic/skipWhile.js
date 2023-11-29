import { from, skipWhile } from 'rxjs';
//skipWhile接受一个表单式，当表达式true，则阻止抛出，当表达式false,开启抛出

const source = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])
// Skip the heroes until SuperGirl
const example = source.pipe(skipWhile(hero => hero !== 'SuperGirl'));
// output: SuperGirl, Black Canary
example.subscribe(femaleHero => console.log(femaleHero));