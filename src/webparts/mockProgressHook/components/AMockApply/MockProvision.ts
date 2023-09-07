import { IMyProgress } from './IMyProgress';


export async function provisionMockList( setProgress : (progress : IMyProgress[]) => void, markComplete: any, ): Promise<IMyProgress[][]>{
  // const result = await mockCreateField(['create','changesFinal'], [ 'Item1', 'Item2', 'Item3' ], setProgress,  );
  const result1 = await mockCreateField1(['step1', 'step2', 'step3'], [ 'Item1F', 'Item2F', 'Item3F' ], 'Field',setProgress,  );
  console.log('Finished result1');
  const result2 = await mockCreateField2(['step1', 'step2', 'step3'], [ 'Item1V', 'Item2V', 'Item3V' ], 'View', setProgress,  );
  console.log('Finished result2');
  const result3 = await mockCreateField3(['step1', 'step2', 'step3'], [ 'Item1I', 'Item2I', 'Item3I' ], 'Item', setProgress,  );
  console.log('Finished result3');
  return [ result1, result2, result3 ];
}

export async function mockCreateField2( steps: string[], items: string[], list: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  // await new Promise(resolve => setTimeout(resolve, 500)); // Pause for effect
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
        await new Promise(resolve => setTimeout(resolve, 300)); // Pause for effect
        i++;
        // setProgress( buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${list} to list ( ${step} ): `, `${list}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
        const myProgress: IMyProgress = buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
        results.unshift( myProgress )
        setProgress( results );
    }
  }

  return results;

}
export async function mockCreateField1( steps: string[], items: string[], list: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  // await new Promise(resolve => setTimeout(resolve, 500)); // Pause for effect
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
        await new Promise(resolve => setTimeout(resolve, 300)); // Pause for effect
        i++;
        // setProgress( buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${list} to list ( ${step} ): `, `${list}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
        const myProgress: IMyProgress = buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
        results.unshift( myProgress )
        setProgress( results );
    }
  }

  return results;

}
export async function mockCreateField3( steps: string[], items: string[], list: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  // await new Promise(resolve => setTimeout(resolve, 500)); // Pause for effect
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
      await new Promise(resolve => setTimeout(resolve, 300)); // Pause for effect
      i++;
      // setProgress( buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${list} to list ( ${step} ): `, `${list}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
      const myProgress: IMyProgress = buildMyProgress( false, list, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
      results.unshift( myProgress )
      setProgress( results );
    }
  }

  return results;

}

// export function buildMyProgress( progressHidden: boolean, list: 'E' | 'Field' | 'View' | 'Item' | string, current: number , ofThese: number, color: string, icon: string, logLabel: string, label: string, description: string, ref: string = null ) : IMyProgress {
export function buildMyProgress( progressHidden: boolean, list: 'E' | 'Field' | 'View' | 'Item' | string, i: number , n: number, color: string, icon: string, item: string, step: string, ref: string = null ) : IMyProgress {

  const thisTime = new Date();
  const timeMS = thisTime.getTime();
  const timeStr = thisTime.toLocaleTimeString();

  const percentComplete = n !== 0 ? i/n : 0;
  const id: string= makeid( 5 );
  const label =  `${list}s ${ i } of ${n} : ${item}`;
  const MyProgress: IMyProgress = {
      id: id,
      timeMS: timeMS,
      rowLabel: `[ ${ i * 1 } of ${ n * 1 } ${ id }] => ${ label + '- at ' + timeStr }`,
      ref: ref,
      time: timeStr,
      logLabel: `Adding ${list} to list ( ${step} ): `,
      label: label + '- at ' + timeStr,
      description: `${list}s ${ i * 1 } of ${n * 1} : ${item}`,
      current: i * 1,
      ofThese: n * 1,
      array: `${list}`,
      percentComplete: percentComplete * 1,
      progressHidden: progressHidden === true ? true : false,
      color: `${color}`,
      icon: `${icon}`,
    };

    return MyProgress;
}

export function makeid(length: number): string {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}