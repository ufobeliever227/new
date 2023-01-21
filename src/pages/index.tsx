import {
  DropDown,
  Field,
  History,
  Loading,
  Error,
  NoLevel,
} from "@/components";
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
      if (checkedElements[i].key === elem.key) {
        setCheckedElements(
          checkedElements.filter((el) => {
            return !(el.key === elem.key);
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
    } else {
      if (level) {
        return (
          <Field
            elementsCount={level.field}
            setCheckedElement={setCheckedElement}
            checkedElements={checkedElements}
          />
        );
      } else {
        return <NoLevel />;
      }
    }
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
