import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HistoryItem } from "../HistoryItem";
import { IHistoryProps } from "./types";

export const History: React.FC<IHistoryProps> = ({ items, label }) => {
  return (
    <div className="w-64 flex flex-col">
      <h4 className="text-center text-3xl font-bold mb-4">{label}</h4>
      <TransitionGroup className="flex flex-col gap-2">
        {items.map((e) => {
          return (
            <CSSTransition timeout={500} classNames="history-item" key={e.key}>
              <HistoryItem row={e.row} col={e.col} key={e.key} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
