
import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react';
import { IMyProgress } from './IMyProgress';

export function commonProgress( progressX: IMyProgress ) : JSX.Element {

  const CurrentProgress = progressX === null ? <div style={{ height: '60px', display: 'inline-flex'}} >No Progress was found</div> : <ProgressIndicator
    label={progressX.label}
    description={progressX.description}
    percentComplete={progressX.percentComplete}
    progressHidden={progressX.progressHidden}/>;

  return CurrentProgress

}

export function commonRows( items: IMyProgress[] ): JSX.Element[] {
  console.log('commonRows Origin', items.length, items );
  const sortedItems = items.sort((a, b) => b.timeMS - a.timeMS);
  console.log('commonRows Sorted:', sortedItems.length, sortedItems );
  const rows: JSX.Element[] = sortedItems.map( ( item: IMyProgress ) => {
    return <div key={ item.label }>{ item.rowLabel }</div>
  })
  return rows;

}

export function commmonButtons( applyThisTemplate: any ) : JSX.Element {

  const ButtonRow: JSX.Element = <div className='apply-template-dropdown' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button className={ '' }
      disabled={ false }
      onClick={ applyThisTemplate }
      >
      Run Function
      </button>
    </div>

  return ButtonRow;

}