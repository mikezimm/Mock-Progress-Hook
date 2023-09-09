import { IMyProgress } from './IMyProgress';
import { buildMyProgress } from './buildMyProgress';


export async function provisionMockList( setProgress : (progress : IMyProgress[]) => void, markComplete: any, ): Promise<IMyProgress[][]>{
  // const result = await mockCreateField(['create','changesFinal'], [ 'Item1', 'Item2', 'Item3' ], setProgress,  );
  const result1 = await mockCreateField1(['create', 'firstUpdate', 'finalUpdate'], [ 'Year', 'Period', 'Category', 'To', 'From', 'Subject', 'MessageId' ], 'Field', setProgress,  );
  console.log('Finished result1');
  const result2 = await mockCreateField2(['create', 'firstUpdate', 'finalUpdate'], [ 'By Year', 'By Period', ], 'View', setProgress,  );
  console.log('Finished result2');
  const result3 = await mockCreateField3(['create', 'firstUpdate', 'finalUpdate'], [ 'Item1I', 'Item2I', 'Item3I' ], 'Item', setProgress,  );
  console.log('Finished result3');
  return [ result1, result2, result3 ];
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
        results.unshift( myProgress );
        setProgress( results );
    }
  }

  return results;

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

export function makeid(length: number): string {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}