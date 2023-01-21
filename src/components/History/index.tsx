import { createRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HistoryItem } from "../HistoryItem";
import { IHistoryProps } from "./types";

export const History: React.FC<IHistoryProps> = ({ items, label }) => {
  return (
    <div className="w-64 flex flex-col">
      <h4 className="text-center text-3xl font-bold mb-4">{label}</h4>
      <TransitionGroup>
        {items.map((e) => {
          console.log(e[0], e[1]);
          return (
            <CSSTransition timeout={500} classNames="history-item" key={e[2]}>
              <HistoryItem row={e[0]} col={e[1]} key={e[2]} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
