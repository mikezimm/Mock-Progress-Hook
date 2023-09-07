import * as React from 'react';
import { provisionMockList } from './MockProvision';
import { commmonButtons, commonProgress, commonRows } from './CommonCode';
import { IMyProgress } from './IMyProgress';

export interface IMockProgressClassProps {

}

export interface IMocProgressClassState {
  fieldsX: IMyProgress[];
  total: number;
  current: number;
  status: string;
  progressX: IMyProgress[];
}

export default class MockProgressClass extends React.Component<IMockProgressClassProps, IMocProgressClassState> {

  constructor(props: IMockProgressClassProps) {
    super(props);

    this.state = {
      fieldsX: [],
      total: 0,
      current: 0,
      status: '',
      progressX: [],
    };
  }

  public componentDidMount(): void {
    //
  }

  public async componentDidUpdate(prevProps: IMockProgressClassProps): Promise<void> {
    console.log('didUpdate');
  }

  private setProgress( progress: IMyProgress[] ): void {

    const { fieldsX, total } = this.state;

    // const newFields = fieldsX.length === 0 ? [progress] : [progress].concat(fieldsX);
    // console.log( 'setProgress progres, fieldsX, newFields:', progress, fieldsX, newFields );

    this.setState({
      total: total + 1,
      current: progress[0].current,
      progressX: progress,
      fieldsX: progress,
    });
  }

  private markComplete () : void  {
    this.setState({ status: 'Finished ~ 104' });
  }

  private async applyThisTemplate( ): Promise<void> {
    this.setState({ status: 'Starting ~ 96', fieldsX: [], progressX: [] });
    const listCreated: IMyProgress[][] = await provisionMockList( this.setProgress.bind(this), this.markComplete.bind(this) , );
    console.log( `applyThisTemplate Finish: `, listCreated );
    this.setState({ status: 'Finished ~ 100', fieldsX: listCreated[0], progressX: listCreated[0] });
  }

  public render(): React.ReactElement<IMockProgressClassProps> {

    const { progressX, current, fieldsX, total } = this.state;
    console.log( 'render: fieldsX', fieldsX );

    const CurrentProgress = progressX.length === 0 ? undefined : commonProgress( progressX[0] );
    const CurrentRows = commonRows( fieldsX );

    const ProgressPane: JSX.Element = <div>
      { CurrentProgress }
      <div>Status: { this.state.status } / current: { current }</div>
      { CurrentRows }
    </div>;

    const ButtonRow: JSX.Element = commmonButtons( this.applyThisTemplate.bind( this ) );

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

    console.log( 'MockTemplate: current, total, ', current, total );

    const FinalElement: JSX.Element =  <div className = { [ 'apply-template-page' ].join( ' ' ) } style={{ minHeight: '150px' }}>
      <div style={{ fontWeight: 600, fontSize: 'larger', marginBottom: '1em' }}>CLASS:  Want to kick-start your library with a Template?</div>
      { ButtonRow }
      { ProgressPane }
    </div>;

    return ( <div>
      { FinalElement }
    </div> );
  }

}
