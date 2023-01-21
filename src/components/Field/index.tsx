import React, { useState } from "react";
import { FieldItem } from "../FieldItem";
import { IHistoryItemProps } from "../HistoryItem/types";
import { IFieldProps } from "./types";

export const Field: React.FC<IFieldProps> = ({
  elementsCount,
  setCheckedElement,
  checkedElements,
}) => {
  const [prevId, setPrevId] = useState<string>("");
  const createArrayForFields = (count: number = elementsCount) => {
    let res: Array<Array<Array<number>>> = [];
    for (let i = 0; i < count; i++) {
      res.push([]);
      for (let j = 0; j < count; j++) {
        res[i].push([i, j]);
      }
    }

    return res;
  };

  const isChecked = (
    elementRow: number,
    elementCol: number,
    elements: Array<IHistoryItemProps> = checkedElements
  ) => {
    for (let el of elements) {
      if (el.col === elementCol && el.row === elementRow) {
        return true;
      }
    }

    return false;
  };

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    let currentElement = (e.target as HTMLTextAreaElement).closest(".button");

    if (currentElement !== null) {
      if (prevId !== currentElement.id) {
        setPrevId(currentElement.id);

        const [row, col] = currentElement.id.split("-").map((e) => +e);
        setCheckedElement({ col, row, key: Date.now() });
      }
    }
  };

  return (
    <div
      className="flex w-min"
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={() => setPrevId("")}
    >
      {createArrayForFields(elementsCount).map((rows) => {
        return (
          <div key={rows[0][0]}>
            {rows.map((element) => {
              const [col, row] = element;
              const id = element.join("-");
              return (
                <FieldItem key={id} id={id} isChecked={isChecked(col, row)} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
