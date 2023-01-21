import { DropDown, Field, FieldItem, History } from "@/components";
import { IHistoryItemProps } from "@/components/HistoryItem/types";
import { useQuery } from "@/hooks";
import { Button } from "antd";
import { useState } from "react";

const Index = () => {
  const { data, loading, error } = useQuery();

  const [checkedElements, setCheckedElements] = useState<
    Array<IHistoryItemProps>
  >([]);

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

  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
    {
      label: "4rd menu item",
      key: "4",
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <div className="flex justify-between p-20">
      <div className="w-min">
        <div className="flex w-full justify-between mb-6">
          <DropDown label="vrwere" menuProps={menuProps} />
          <Button type="primary" className="uppercase font-semibold h-11 ml-4">
            start
          </Button>
        </div>
        <Field
          elementsCount={5}
          setCheckedElement={setCheckedElement}
          checkedElements={checkedElements}
        />
      </div>
      <History items={checkedElements} label="Hover Squares" />
    </div>
  );
};

export default Index;
