import * as React from 'react';
import { IMockProgressHookProps } from './IMockProgressHookProps';
import MockApplyHook from './AMockApply/MockApplyHook';
import MockProgressClass from './AMockApply/MocProgressClass';
// import MockApplyHookWorks from './AMockApply/MockApplyHookWorks';
import MockApplyHookWorksFull from './AMockApply/MockApplyHookWorksFull';

export default class MockProgressHook extends React.Component<IMockProgressHookProps, {}> {
  public render(): React.ReactElement<IMockProgressHookProps> {
    return (
      <div style={{ gap: '2em' }}>
        <MockApplyHookWorksFull />
        <MockApplyHook />
        <MockProgressClass />
      </div>

    );
  }
}
