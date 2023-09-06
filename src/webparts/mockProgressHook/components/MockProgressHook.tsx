import * as React from 'react';
import { IMockProgressHookProps } from './IMockProgressHookProps';
import MockApplyHook from './AMockApply/MockApplyHook';

export default class MockProgressHook extends React.Component<IMockProgressHookProps, {}> {
  public render(): React.ReactElement<IMockProgressHookProps> {
    return (
      <MockApplyHook />
    );
  }
}
