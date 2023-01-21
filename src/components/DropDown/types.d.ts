import { ILevel } from "../../types";

export interface IDropDownProps {
  menuProps: Array<ILevel> | null;
  level: ILevel | null;
  setLevel: Dispatch<SetStateAction<ILevel | null>>;
}
