import { IMyProgress } from "./MockApplyHook";


export async function provisionMockList( setProgress: any, markComplete: any, ): Promise<string[]>{
  // const result = await mockCreateField(['create','changesFinal'], [ 'Item1', 'Item2', 'Item3' ], setProgress,  );
  const result = await mockCreateField(['step1'], [ 'Item1', 'Item2', 'Item3' ], setProgress,  );
  return result;
}

export async function mockCreateField( steps: string[], items: string[], setProgress : any) : Promise<string[]> {
  const results: string[]=[];
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const f of items) {
        await new Promise(resolve => setTimeout(resolve, 1100)); // Pause for effect
        i++;
        setProgress( buildMyProgress( false, "C", i, n , 'darkgray', 'CalculatorSubtract', f, 'Adding fields to list (' + step +'): ', 'Field ' + i + ' of ' + n + ' : ' + f , step + ' anotherFunction ~ 34') );
      results.push( `${ step } ${i} ${ f }`)
    }
  }

  return results;

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
      percentComplete: percentComplete,
      progressHidden: progressHidden,
      color: color,
      icon: icon,
    };

    return MyProgress;
}