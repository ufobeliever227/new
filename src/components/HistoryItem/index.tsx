import { IHistoryItemProps } from "../../types/types";

export const HistoryItem: React.FC<IHistoryItemProps> = ({ row, col, key }) => {
  return (
    <div
      key={key}
      className="py-4
                 px-2
                 bg-secondary-orange
                 rounded
                 border-2
                 border-primary-gold"
    >
      <div className="text-primary-orange">
        row {row} col {col}
      </div>
    </div>
  );
};
