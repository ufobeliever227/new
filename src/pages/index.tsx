import { DropDown, Field, FieldItem, History } from "@/components";
import { useQuery } from "@/hooks";
import { Button } from "antd";
import { useEffect, useState } from "react";

const Index = () => {
  const { data, loading, error } = useQuery();
  const [checkedElements, setCheckedElements] = useState<Array<Array<number>>>(
    []
  );

  const setCheckedElement = (elem: Array<number>) => {
    for (let i = 0; i < checkedElements.length; i++) {
      if (
        checkedElements[i][0] === elem[0] &&
        checkedElements[i][1] === elem[1]
      ) {
        setCheckedElements(
          checkedElements.filter((el) => {
            return !(el[0] === elem[0] && el[1] === elem[1]);
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
    <div>
      <FieldItem isChecked={true} />
      <DropDown label="vrwere" menuProps={menuProps} />
      <Button type="primary" className="uppercase font-semibold h-11">
        start
      </Button>
      <Field
        elementsCount={5}
        setCheckedElement={setCheckedElement}
        checkedElements={checkedElements}
      />
      <History items={checkedElements} label="Hover Squares" />
    </div>
  );
};

export default Index;
