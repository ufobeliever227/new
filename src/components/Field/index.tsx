import { FieldItem } from "../FieldItem";
import { IFieldProps } from "./types";

export const Field: React.FC<IFieldProps> = ({ elementsCount }) => {
  const createArrayForFields = (count: number) => {
    let res: Array<Array<Array<number>>> = [];
    for (let i = 0; i < count; i++) {
      res.push([]);
      for (let j = 0; j < count; j++) {
        res[i].push([i, j]);
      }
    }

    return res;
  };

  return (
    <div className="flex">
      {createArrayForFields(elementsCount).map((rows) => {
        return (
          <div>
            {rows.map((columns) => {
              return <FieldItem />;
            })}
          </div>
        );
      })}
    </div>
  );
};
