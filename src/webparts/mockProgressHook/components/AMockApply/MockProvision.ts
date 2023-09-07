import { IMyProgress } from './IMyProgress';


export async function provisionMockList( setProgress : (progress : IMyProgress[]) => void, markComplete: any, ): Promise<IMyProgress[][]>{
  // const result = await mockCreateField(['create','changesFinal'], [ 'Item1', 'Item2', 'Item3' ], setProgress,  );
  const result1 = await mockCreateField1(['create', 'firstUpdate', 'finalUpdate'], [ 'Year', 'Period', 'Category', 'To', 'From', 'Subject', 'MessageId' ], 'Field',setProgress,  );
  console.log('Finished result1');
  const result2 = await mockCreateField2(['create', 'firstUpdate', 'finalUpdate'], [ 'By Year', 'By Period', ], 'View', setProgress,  );
  console.log('Finished result2');
  const result3 = await mockCreateField3(['create', 'firstUpdate', 'finalUpdate'], [ 'Item1I', 'Item2I', 'Item3I' ], 'Item', setProgress,  );
  console.log('Finished result3');
  return [ result1, result2, result3 ];
}

export async function mockCreateField2( steps: string[], items: string[], itemType: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
        i++;
        // setProgress( buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${itemType} to itemType ( ${step} ): `, `${itemType}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
        const myProgress: IMyProgress = await buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
        results.unshift( myProgress )
        setProgress( results );
    }
  }

  return results;

}
export async function mockCreateField1( steps: string[], items: string[], itemType: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
        i++;
        // setProgress( buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${itemType} to itemType ( ${step} ): `, `${itemType}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
        const myProgress: IMyProgress = await buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
        results.unshift( myProgress )
        setProgress( results );
    }
  }

  return results;

}
export async function mockCreateField3( steps: string[], items: string[], itemType: 'E' | 'Field' | 'View' | 'Item' , setProgress : (progress : IMyProgress[]) => void, ) : Promise<IMyProgress[]> {
  const results: IMyProgress[]=[];
  for ( const step of steps ) {

    const n = items.length;
    let i = 0;
    for (const item of items) {
      i++;
      // setProgress( buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', f, `Adding ${itemType} to itemType ( ${step} ): `, `${itemType}s ${ i } of ${n} : ${f}` , `step ${'anotherFunction ~ 34'}`) );
      const myProgress: IMyProgress = await buildMyProgress( false, itemType, i, n , 'darkgray', 'CalculatorSubtract', item, step , `step ${'anotherFunction ~ 34'}` );
      results.unshift( myProgress )
      setProgress( results );
    }
  }

  return results;

}

// export function buildMyProgress( progressHidden: boolean, itemType: 'E' | 'Field' | 'View' | 'Item' | string, current: number , ofThese: number, color: string, icon: string, logLabel: string, label: string, description: string, ref: string = null ) : IMyProgress {
export async function buildMyProgress( progressHidden: boolean, itemType: 'E' | 'Field' | 'View' | 'Item' | string, i: number , n: number, color: string, icon: string, item: string, step: string, ref: string = null ) : Promise<IMyProgress> {
  await new Promise(resolve => setTimeout(resolve, 350)); // Pause for effect
  const thisTime = new Date();
  const timeMS = thisTime.getTime();
  const timeStr = thisTime.toLocaleTimeString();

  const percentComplete = n !== 0 ? i/n : 0;
  const id: string= makeid( 5 );
  const label =  `${itemType}s ${ i } of ${n} : ${item}`;
  const MyProgress: IMyProgress = {
      id: id,
      timeMS: timeMS,
      rowLabel: `${step} [ ${ itemType } ${ i } of ${ n } ${ id }] => ${ item + ' - at ' + timeStr }`,
      ref: ref,
      time: timeStr,
      logLabel: ` ${step} Adding ${itemType} to list ( ${item} ): `,
      label: label + '- at ' + timeStr,
      description: `${itemType}s ${ i } of ${n} : ${item}`,
      current: i,
      ofThese: n,
      array: itemType,
      percentComplete: percentComplete,
      progressHidden: progressHidden,
      color: color,
      icon: icon,
    };

    // parsing it to insure it's not mutating somewhere
    return JSON.parse(JSON.stringify( MyProgress ));
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