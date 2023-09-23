import { MouseEvent } from "react";
import { History } from "../App";

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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span className="history__text">
                {history[history.length - 1].result}
              </span>
            </div>
          )}
          <span className="output__text">{output}</span>
        </div>
        <div className="display__input">
          <div onClick={() => onclick()} className="go_back_arrow">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="input__text">{input}</span>
        </div>
      </div>
    </>
  );
}
