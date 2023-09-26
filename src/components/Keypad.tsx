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
          <button className="color_grey" onClick={onClick}>
            AC
          </button>
        </div>
        <div className="keypad__button">
          <button className="color_grey" onClick={onClick}>
            +/-
          </button>
        </div>
        <div className="keypad__button ">
          <button className="color_grey" onClick={onClick}>
            %
          </button>
        </div>
        <div className="keypad__button ">
          <button className="color_yellow" onClick={onClick}>
            /
          </button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>7</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>8</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>9</button>
        </div>
        <div className="keypad__button ">
          <button className="color_yellow" onClick={onClick}>
            *
          </button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>4</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>5</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>6</button>
        </div>
        <div className="keypad__button ">
          <button className="color_yellow" onClick={onClick}>
            -
          </button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>1</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>2</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>3</button>
        </div>
        <div className="keypad__button ">
          <button className="color_yellow" onClick={onClick}>
            +
          </button>
        </div>
        <div className="keypad__button button_large">
          <button onClick={onClick}>0</button>
        </div>
        <div className="keypad__button">
          <button onClick={onClick}>.</button>
        </div>
        <div className="keypad__button ">
          <button className="color_yellow" onClick={onClick}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
