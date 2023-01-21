import React, { useState } from "react";
import { FieldItem } from "../FieldItem";
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
    element: Array<number>,
    elements: Array<Array<number>> = checkedElements
  ) => {
    for (let el of elements) {
      if (el[0] === element[0] && el[1] === element[1]) {
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
        setCheckedElement([
          ...currentElement.id.split("-").map((e) => +e),
          Date.now(),
        ]);
      }
    }
  };

  return (
    <div className="flex w-min" onMouseMove={onMouseMoveHandler}>
      {createArrayForFields(elementsCount).map((rows) => {
        return (
          <div>
            {rows.map((element) => {
              return (
                <FieldItem
                  id={element.join("-")}
                  isChecked={isChecked(element)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
