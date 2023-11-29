//bufferCount指定缓存数，第二参数代表，间隔startBufferEvery值后开启后续缓存
//如果startBufferEvent为0则不生效
//
import { fromEvent, bufferCount, tap } from 'rxjs';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferCount(4,1));
buffered.subscribe(x => console.log(x));