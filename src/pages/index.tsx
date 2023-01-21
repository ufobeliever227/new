import { DropDown, Field, FieldItem, History } from "@/components";
import { useQuery } from "@/hooks";
import { Button } from "antd";

const Index = () => {
  const { data, loading, error } = useQuery();

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

  const data1 = [
    {
      row: 2,
      col: 6,
      key: 1,
    },
    {
      row: 2,
      col: 6,
      key: 2,
    },
    {
      row: 2,
      col: 6,
      key: 3,
    },
  ];

  return (
    <div>
      <FieldItem isChecked={true} />
      <DropDown label="vrwere" menuProps={menuProps} />
      <Button type="primary" className="uppercase font-semibold h-11">
        start
      </Button>
      <History items={data1} label="Hover Squares" />
      <Field elementsCount={5} />
    </div>
  );
};

export default Index;
