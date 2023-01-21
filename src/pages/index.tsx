import { DropDown, Field, History, Loading, Error } from "@/components";
import { IHistoryItemProps, ILevel } from "../types/types";
import { useQuery } from "@/hooks";
import { Button } from "antd";
import { useState } from "react";

const Index = () => {
  const { data, loading, error } = useQuery<Array<ILevel>>();

  const [checkedElements, setCheckedElements] = useState<
    Array<IHistoryItemProps>
  >([]);

  const [tmpLevel, setTmpLevel] = useState<ILevel | null>(null);
  const [level, setLevel] = useState<ILevel | null>(null);

  const setLevelHandler = () => {
    if (tmpLevel) {
      setLevel(tmpLevel);
      setCheckedElements([]);
    }
  };

  const setCheckedElement = (elem: IHistoryItemProps) => {
    for (let i = 0; i < checkedElements.length; i++) {
      if (
        checkedElements[i].col === elem.col &&
        checkedElements[i].row === elem.row
      ) {
        setCheckedElements(
          checkedElements.filter((el) => {
            return !(el.col === elem.col && el.row === elem.row);
          })
        );
        return;
      }
    }
    setCheckedElements((prev) => [...prev, elem]);
  };

  const renderField = () => {
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    if (level) {
      return (
        <Field
          elementsCount={level.field}
          setCheckedElement={setCheckedElement}
          checkedElements={checkedElements}
        />
      );
    }

    return null;
  };

  return (
    <div className="flex justify-between p-20 flex-wrap gap-20">
      <div className="w-min">
        <div className="flex w-full justify-between mb-6">
          <DropDown level={tmpLevel} setLevel={setTmpLevel} menuProps={data} />
          <Button
            type="primary"
            className="uppercase font-semibold h-11 ml-4"
            onClick={setLevelHandler}
            disabled={!tmpLevel}
          >
            start
          </Button>
        </div>
        {renderField()}
      </div>
      <History items={checkedElements} label="Hover Squares" />
    </div>
  );
};

export default Index;
