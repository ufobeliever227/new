import React, { useState } from "react";
import { FieldItemMemo } from "../FieldItem";
import { IHistoryItemProps } from "../../types/types";
import { IFieldProps } from "./types";

export const Field: React.FC<IFieldProps> = ({
  elementsCount,
  setCheckedElement,
  checkedElements,
}) => {
  //Id of previous hovered square
  const [prevId, setPrevId] = useState<string>("");

  //Create an array that is going to be the base of the rendered field
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

  const isSquareChecked = (
    elementRow: number,
    elementCol: number,
    elements: Array<IHistoryItemProps> = checkedElements
  ) => {
    for (let elem of elements) {
      if (elem.col === elementCol && elem.row === elementRow) {
        return true;
      }
    }

    return false;
  };

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    let currentElement = (event.target as HTMLTextAreaElement).closest(
      ".button"
    );

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
            {rows.map((elem) => {
              const [col, row] = elem;
              const id = elem.join("-");
              return (
                <FieldItemMemo
                  key={id}
                  id={id}
                  isChecked={isSquareChecked(col, row)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
