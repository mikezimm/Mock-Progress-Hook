
import * as React from 'react';
import { IMyProgress } from './MockApplyHook';
import { ProgressIndicator } from 'office-ui-fabric-react';

export function commonProgress( progressX: IMyProgress ) : JSX.Element {

  const CurrentProgress = progressX === null ? <div style={{ height: '60px', display: 'inline-flex'}} >No Progress was found</div> : <ProgressIndicator
    label={progressX.label}
    description={progressX.description}
    percentComplete={progressX.percentComplete}
    progressHidden={progressX.progressHidden}/>;

  return CurrentProgress

}

export function commonRows( fields: IMyProgress[] ): JSX.Element[] {
  const rows: JSX.Element[] = fields.map( ( field: IMyProgress ) => {
    return <div key={ field.label }>{ field.rowLabel }</div>
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