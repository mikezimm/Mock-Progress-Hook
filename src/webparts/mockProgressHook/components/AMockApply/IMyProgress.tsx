
export interface IMyProgress {
  // [key: string]: string | boolean | number | undefined;
  timeMS: number;
  time: string;
  logLabel: string;
  label: string;
  rowLabel: string;
  description: string;
  current: number;
  ofThese: number;
  percentComplete?: number;
  progressHidden?: boolean;
  array: string;
  icon?: string;
  color?: string;
  ref?: string;
  refElement?: any;
  id: string;
}
