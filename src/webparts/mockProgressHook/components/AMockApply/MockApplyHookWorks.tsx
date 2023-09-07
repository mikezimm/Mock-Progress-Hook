import * as React from 'react';
import { useState, useEffect } from 'react';

import { provisionMockList } from './MockProvision';
import { commmonButtons, commonProgress, commonRows } from './CommonCode';
import { IMyProgress } from './IMyProgress';

require ('./MockApply.css');

export interface IMockApplyHookProps {

}

let renders: number = 0;

const MockApplyHookWorks: React.FC<IMockApplyHookProps> = ( props ) => {

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
  const [ total, setTotal ] = useState<number>( 0 );
  const [ currentX, setCurrentX ] = useState<number>( 0 );
  const [ status, setStatus ] = useState<string>( 'Waiting' );

  const [ progressX, setProgressX ] = useState<IMyProgress>( null );

  useEffect(() => {

    if ( !progressX ) return;

    const newFields = fieldsX.length === 0 ? [progressX] : [progressX].concat(fieldsX);
    console.log( 'setProgress progress, fieldsX, newFields:', progressX, fieldsX, newFields );

    const newTotal = total + 1;
    setTotal( newTotal );
    setCurrentX( progressX.current );
    setFieldsX( newFields );

  }, [ progressX ]);

  // const setProgress = ( progress: IMyProgress ): void => {
  //   setProgressX( progress );
  // }

  const markComplete = () : void => {
    setStatus( 'Finished ~ 128' );
  }

  const applyThisTemplate = async (): Promise<void> => {
    setStatus( 'Starting' );
    const listCreated: IMyProgress[][] = await provisionMockList( setProgressX, markComplete , );
    console.log( `applyThisTemplate Finish: `, listCreated );
    setStatus( 'Finished' );
  };

  const CurrentProgress = commonProgress( progressX );
  const CurrentRows = commonRows( fieldsX );

  const ProgressPane: JSX.Element = <div>
    { CurrentProgress }
    <div>Status: { status } / current: { currentX }</div>
    { CurrentRows }
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
    <div style={{ fontWeight: 600, fontSize: 'larger', marginBottom: '1em' }}>HOOK Works:  Want to kick-start your library with a Template?</div>
    { ButtonRow }
    { ProgressPane }

  </div>;

  return ( <div>
    { FinalElement }
  </div>  );

}

export default MockApplyHookWorks;