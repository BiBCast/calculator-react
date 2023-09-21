import { CSSProperties } from "react";

type Props = {
  options: string[];
  selectedIndex: number;
  onclick: (index: number) => void;
};

export function Navigation({ options, selectedIndex, onclick }: Props) {
  const styleOptions = { "--options": options.length } as CSSProperties;

  return (
    <>
      <div className="cellphone__navigation" style={styleOptions}>
        {options.map((opt, index) => {
          return (
            <button
              onClick={() => onclick(index)}
              type="button"
              key={index}
              className="navigation__element"
            >
              {opt}
            </button>
          );
        })}
        <div
          className="navigation__hover"
          style={
            {
              "--selected-option": selectedIndex,
            } as CSSProperties
          }
        ></div>
      </div>
    </>
  );
}
