import { IMyProgress } from "./MockApplyHook";



export async function mockCreateField( setProgress : (progress : IMyProgress) => void, ) : Promise<string[]> {
  const MyProgress: IMyProgress = {
    ref: `ref`,
    time: `thisTime`,
    logLabel: `logLabel`,
    label: `label + '- at ' + thisTime`,
    rowLabel:' `[ ${ current }  + thisTime }`',
    description: 'description',
    current: 1,
    ofThese: 3,    
    array: 'Views',
    percentComplete: 1,
    progressHidden: false,
    color: 'color',
    icon: 'icon',
  };
  setProgress( MyProgress );
  return ['x'];
}

export function buildMyProgress( progressHidden: boolean, list: 'E' | 'C' | 'V' | 'I', current: number , ofThese: number, color: string, icon: string, logLabel: string, label: string, description: string, ref: string = null ) : IMyProgress {

  const thisTime = new Date().toLocaleTimeString();
  const percentComplete = ofThese !== 0 ? current/ofThese : 0;

  logLabel = current > 0 ? current + '/' + ofThese + ' - ' + logLabel : logLabel ;
  const MyProgress: IMyProgress = {
      ref: ref,
      time: thisTime,
      logLabel: logLabel,
      label: label + '- at ' + thisTime,
      rowLabel: `[ ${ current } of ${ ofThese } ] => ${ label + '- at ' + thisTime }`,
      description: description,
      current: current,
      ofThese: ofThese,
      array: list,
      percentComplete: percentComplete,
      progressHidden: progressHidden,
      color: color,
      icon: icon,
    };

    return MyProgress;
}