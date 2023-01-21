import { Button, Dropdown, MenuProps, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IDropDownProps } from "./types";

export const DropDown: React.FC<IDropDownProps> = ({ menuProps, label }) => {
  return (
    <Dropdown
      menu={menuProps}
      className="w-44 border-2 border-black rounded-none h-10"
    >
      <Button>
        <div className="flex items-center justify-between w-full">
          {label}
          <CaretDownOutlined />
        </div>
      </Button>
    </Dropdown>
  );
};
