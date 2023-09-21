import { MouseEvent } from "react";
export function KeyPad({
  onClick,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <div className="cellphone__keypad">
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>AC</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>+/-</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>%</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>/</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>7</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>8</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>9</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>*</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>4</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>5</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>6</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>-</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>1</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>2</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>3</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>+</button>
        </div>
        <div className="keypad__button button_large">
          <button onClick={(e) => onClick(e)}>0</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>.</button>
        </div>
        <div className="keypad__button">
          <button onClick={(e) => onClick(e)}>=</button>
        </div>
      </div>
    </>
  );
}
