
// import { IMyProgress, } from '@mikezimm/fps-library-v2/lib/common/interfaces/fps/IMyInterfaces';
// import { makeid } from '@mikezimm/fps-library-v2/lib/logic/Strings/guids';

import { IMyProgress } from './IMyProgress';
import { makeid } from './MockProvision';

// export function buildMyProgress( progressHidden: boolean, itemType: 'E' | 'Field' | 'View' | 'Item' | string, current: number , ofThese: number, color: string, icon: string, logLabel: string, label: string, description: string, ref: string = null ) : IMyProgress {

export async function buildMyProgress(progressHidden: boolean, itemType: 'E' | 'Field' | 'View' | 'Item' | string, i: number, n: number, color: string, icon: string, item: string, step: string, ref: string = null): Promise<IMyProgress> {
  await new Promise(resolve => setTimeout(resolve, 350)); // Pause for effect
  const thisTime = new Date();
  const timeMS = thisTime.getTime();
  const timeStr = thisTime.toLocaleTimeString();

  const percentComplete = n !== 0 ? i / n : 0;
  const id: string = makeid(5);
  const label = `${itemType}s ${i} of ${n} : ${item}`;
  const MyProgress: IMyProgress = {
    id: id,
    timeMS: timeMS,
    rowLabel: `${step} [ ${itemType} ${i} of ${n} ${id}] => ${item + ' - at ' + timeStr}`,
    ref: ref,
    time: timeStr,
    logLabel: ` ${step} Adding ${itemType} to list ( ${item} ): `,
    label: label + '- at ' + timeStr,
    description: `${itemType}s ${i} of ${n} : ${item}`,
    current: i,
    ofThese: n,
    array: itemType,
    percentComplete: percentComplete,
    progressHidden: progressHidden,
    color: color,
    icon: icon,
  };

  // parsing it to insure it's not mutating somewhere
  return JSON.parse(JSON.stringify(MyProgress));
}
