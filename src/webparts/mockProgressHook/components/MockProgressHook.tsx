import * as React from 'react';
import { IMockProgressHookProps } from './IMockProgressHookProps';
import MockApplyHook from './AMockApply/MockApplyHook';
import MockProgressClass from './AMockApply/MocProgressClass';

export default class MockProgressHook extends React.Component<IMockProgressHookProps, {}> {
  public render(): React.ReactElement<IMockProgressHookProps> {
    return (
      <div style={{ display: 'flex', gap: '2em' }}>
        <MockApplyHook />
        <MockProgressClass />
      </div>

    );
  }
}
