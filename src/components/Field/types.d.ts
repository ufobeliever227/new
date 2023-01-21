import { IHistoryItemProps } from "../HistoryItem/types";

export interface IFieldProps {
  elementsCount: number;
  setCheckedElement: (elem: IHistoryItemProps) => any;
  checkedElements: Array<IHistoryItemProps>;
}
