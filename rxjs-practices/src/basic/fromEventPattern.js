import { fromEventPattern } from 'rxjs';
//实现自定义的事件注册和移除，来应对一些事件方面的特殊情况

// 以下是一些可能的使用场景：

// Node.js 事件：Node.js 的事件模型使用 on 和 removeListener，而不是 addEventListener 和 removeEventListener。你可以使用 fromEventPattern 来创建一个 Observable，这个 Observable 会从 Node.js 事件中产生值。

// 自定义事件：如果你正在使用一个自定义的事件系统，你可以使用 fromEventPattern 来创建一个 Observable，这个 Observable 会从你的自定义事件中产生值。

// 第三方库：如果你正在使用一个第三方库，这个库有自己的事件模型，你可以使用 fromEventPattern 来创建一个 Observable，这个 Observable 会从这个库的事件中产生值。
function addClickHandler(handler) {
    //handler是个处理器
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}

const clicks = fromEventPattern(
  addClickHandler,
  removeClickHandler
);
clicks.subscribe(x => console.log(x));

// Whenever you click anywhere in the browser, DOM MouseEvent
// object will be logged.