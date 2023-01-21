import { IFieldItemProps } from "./types";
import styles from "./FieldItem.module.scss";

export const FieldItem: React.FC<IFieldItemProps> = ({ isChecked = false }) => {
  return (
    <div
      className={
        "w-16 h-16 overflow-hidden " +
        " " +
        styles["field-item"] +
        " " +
        (isChecked ? styles["field-item_checked"] : "")
      }
    >
      <div className="w-full" />
    </div>
  );
};
