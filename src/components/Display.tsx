import { MouseEvent } from "react";
import { History } from "../App";
import { Glass } from "../assents/Glass";
import { BackArrow } from "../assents/BackArrow";

export function Display({
  input,
  output,
  onclick,
  handlePopup,
  history,
}: {
  input: string;
  output: string;
  onclick: () => void;
  handlePopup: (e: MouseEvent<HTMLDivElement>) => void;
  history: History[];
}) {
  return (
    <>
      <div className="cellphone__display">
        <div className="display__output">
          {history.length >= 2 && (
            <div className="output__history" onClick={(e) => handlePopup(e)}>
              <Glass />
              <span className="history__text">
                {history[history.length - 1].result}
              </span>
            </div>
          )}
          <span className="output__text">{output}</span>
        </div>
        <div className="display__input">
          <div onClick={() => onclick()} className="go_back_arrow">
            <BackArrow />
          </div>
          <span className="input__text">{input}</span>
        </div>
      </div>
    </>
  );
}
