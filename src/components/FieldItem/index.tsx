import { IFieldItemProps } from "./types";
import styles from "./FieldItem.module.scss";
import React from "react";

const FieldItem: React.FC<IFieldItemProps> = ({
  isChecked = false,
  ...rest
}) => {
  return (
    <div
      className={
        "button w-16 h-16 overflow-hidden box-border bg-white " +
        " " +
        styles["field-item"] +
        " " +
        (isChecked ? styles["field-item_checked"] : "")
      }
      {...rest}
    >
      <div className="w-full" />
    </div>
  );
};

export const FieldItemMemo = React.memo(FieldItem);
