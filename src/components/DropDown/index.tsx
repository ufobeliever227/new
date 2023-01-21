import { Button, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IDropDownProps } from "./types";
import { ILevel } from "@/types/types";

export const DropDown: React.FC<IDropDownProps> = ({
  menuProps,
  level,
  setLevel,
}) => {
  let items;
  if (menuProps) {
    items = {
      items: menuProps.map((e: ILevel, i) => {
        return {
          key: i,
          label: e.name,
          onClick: () => setLevel(e),
        };
      }),
    };
  }

  return (
    <Dropdown
      menu={items}
      className="w-52 border-2 border-black rounded-none h-10"
    >
      <Button>
        <div className="flex items-center justify-between">
          {level ? level.name : "Choose your level"}
          <CaretDownOutlined />
        </div>
      </Button>
    </Dropdown>
  );
};
