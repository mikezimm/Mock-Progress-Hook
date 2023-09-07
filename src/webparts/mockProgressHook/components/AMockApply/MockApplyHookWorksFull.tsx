import * as React from 'react';
import { useState, useEffect } from 'react';

import { makeid, provisionMockList } from './MockProvision';
import { commmonButtons, commonProgress,  } from './CommonCode'; // commonRows
import { IMyProgress } from './IMyProgress';

require ('./MockApply.css');

export interface IMockApplyHookProps {

}

let renders: number = 0;

const MockApplyHookWorksFull: React.FC<IMockApplyHookProps> = ( props ) => {

  /***
   *    db    db .d8888. d88888b      .d8888. d888888b  .d8b.  d888888b d88888b 
   *    88    88 88'  YP 88'          88'  YP `~~88~~' d8' `8b `~~88~~' 88'     
   *    88    88 `8bo.   88ooooo      `8bo.      88    88ooo88    88    88ooooo 
   *    88    88   `Y8b. 88~~~~~        `Y8b.    88    88~~~88    88    88~~~~~ 
   *    88b  d88 db   8D 88.          db   8D    88    88   88    88    88.     
   *    ~Y8888P' `8888Y' Y88888P      `8888Y'    YP    YP   YP    YP    Y88888P 
   *                                                                            
   *                                                                            
   */

  const [ fieldsX, setFieldsX ] = useState<IMyProgress[]>( [] );
  const [ viewsX, setViewsX ] = useState<IMyProgress[]>( [] );
  const [ itemsX, setItemsX ] = useState<IMyProgress[]>( [] );
  const [ total, setTotal ] = useState<number>( 0 );
  const [ currentX, setCurrentX ] = useState<number>( 0 );
  const [ status, setStatus ] = useState<string>( 'Waiting' );
  const [ id , setId ] = useState<string>( makeid(5) );

  const [ progressX, setProgressX ] = useState<IMyProgress>( null );

  // useEffect(() => {

  //   if ( !progressX || progressX.length === 0 ) return;

    // if ( progressX[0].array === 'Field' ) {
    //   // const newArray = fieldsX.length === 0 ? [progressX] : [progressX].concat(fieldsX);
    //   console.log( 'setProgress progress, fieldsX, newArray:', progressX, fieldsX, progressX );
    //   setFieldsX( progressX );

    // } else if ( progressX[0].array === 'View' ) {
    //   // const newArray = viewsX.length === 0 ? [progressX] : [progressX].concat(viewsX);
    //   console.log( 'setProgress progress, viewsX, newArray:', progressX, viewsX, progressX );
    //   setViewsX( progressX );

    // } else if ( progressX[0].array === 'Item' ) {
    //   // const newArray = itemsX.length === 0 ? [progressX] : [progressX].concat(itemsX);
    //   console.log( 'setProgress progress, itemsX, newArray:', progressX, itemsX, progressX );
    //   setItemsX( progressX );

    // }


  // }, [ id ]);

  // useEffect(() => {

  //   if ( !progressX || progressX.length === 0 ) return;

  //   const newTotal = total + 1;
  //   setTotal( newTotal );
  //   setCurrentX( progressX[0].current );
  //   console.log( id );
  //   setId( progressX[0].id );

  // }, [ progressX ]);

  const markComplete = () : void => {
    setStatus( 'Finished' );
  }

  const setProgressNow = ( progress: IMyProgress[] ) : void => {
    if ( !progress || progress.length === 0 ) return;

    const progressCopy: IMyProgress[] = JSON.parse(JSON.stringify( progress ));
    const newTotal = total + 1;
    // setProgressX( progressCopy );
    setTotal( newTotal );
    setCurrentX( progressCopy[0].current );
    setProgressX( progressCopy[0] );
    console.log( 'setProgressNow Id: ', id );
    setId( progressCopy[0].id );

    if ( progressCopy[0].array === 'Field' ) {
      // const newArray = fieldsX.length === 0 ? [progressCopyX] : [progressCopyX].concat(fieldsX);
      console.log( 'setProgress progress, fieldsX, newArray:', progressCopy, fieldsX, progressCopy );
      setFieldsX( progressCopy );

    } else if ( progressCopy[0].array === 'View' ) {
      // const newArray = viewsX.length === 0 ? [progressX] : [progressX].concat(viewsX);
      console.log( 'setProgress progress, viewsX, newArray:', progressCopy, viewsX, progressCopy );
      setViewsX( progressCopy );

    } else if ( progressCopy[0].array === 'Item' ) {
      // const newArray = itemsX.length === 0 ? [progressX] : [progressX].concat(itemsX);
      console.log( 'setProgress progress, itemsX, newArray:', progressCopy, itemsX, progressCopy );
      setItemsX( progressCopy );

    }
  }

  const applyThisTemplate = async (): Promise<void> => {
    setStatus( 'Starting' );
    setFieldsX( [] );
    setViewsX( [] );
    setItemsX( [] );
    const listCreated: IMyProgress[][] = await provisionMockList( setProgressNow, markComplete , );
    console.log( `applyThisTemplate Finish: `, listCreated );
    setFieldsX( listCreated[0] );
    setViewsX( listCreated[1] );
    setItemsX( listCreated[2] );
    setStatus( 'Finished' );
  };

  // console.log( 'before fieldsX:', fieldsX );
  const CurrentProgress = !progressX ? undefined : commonProgress( progressX );

  const FieldsPane: JSX.Element = status !== 'Finished' ?  undefined : <div>
    <h3>Fields Status: </h3>
    { fieldsX.map( ( item: IMyProgress ) => {
      return <div key={ item.label }>{ item.rowLabel }</div>
    }) }
  </div>;

  // console.log( 'before viewsX:', viewsX );
  const ViewsPane: JSX.Element = status !== 'Finished' ?  undefined : <div>
    <h3>Views Status:</h3>
    { viewsX.map( ( item: IMyProgress ) => {
      return <div key={ item.label }>{ item.rowLabel }</div>
    }) }
  </div>;

  // console.log( 'before itemsX:', itemsX );
  const ItemsPane: JSX.Element = status !== 'Finished' ?  undefined : <div>
    <h3>Items Status: </h3>
    { itemsX.map( ( item: IMyProgress ) => {
      return <div key={ item.label }>{ item.rowLabel }</div>
    }) }
  </div>;


  const ButtonRow: JSX.Element = commmonButtons( applyThisTemplate.bind( this ) );

  /***
   *    d88888b d888888b d8b   db  .d8b.  db           d88888b db      d88888b .88b  d88. d88888b d8b   db d888888b 
   *    88'       `88'   888o  88 d8' `8b 88           88'     88      88'     88'YbdP`88 88'     888o  88 `~~88~~' 
   *    88ooo      88    88V8o 88 88ooo88 88           88ooooo 88      88ooooo 88  88  88 88ooooo 88V8o 88    88    
   *    88~~~      88    88 V8o88 88~~~88 88           88~~~~~ 88      88~~~~~ 88  88  88 88~~~~~ 88 V8o88    88    
   *    88        .88.   88  V888 88   88 88booo.      88.     88booo. 88.     88  88  88 88.     88  V888    88    
   *    YP      Y888888P VP   V8P YP   YP Y88888P      Y88888P Y88888P Y88888P YP  YP  YP Y88888P VP   V8P    YP    
   *                                                                                                                
   *                                                                                                                
   */

  renders ++;
  console.log( 'MockTemplateWorks: renders, current, total, ', renders, currentX, total );

  const FinalElement: JSX.Element =  <div className = { [ 'apply-template-page' ].join( ' ' ) } style={{ minHeight: '150px' }}>
    <div style={{ fontWeight: 600, fontSize: 'larger', marginBottom: '1em' }}>MockApplyHookWorksFull:  Want to kick-start your library with a Template?</div>
    { ButtonRow }
    { CurrentProgress }
    <div style={{ display: 'flex', gap: '2em' }}>
      { FieldsPane }
      { ViewsPane }
      { ItemsPane }
    </div>

  </div>;

  return ( <div>
    { FinalElement }
  </div>  );

}

export default MockApplyHookWorksFull;