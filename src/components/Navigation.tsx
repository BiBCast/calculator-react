import { CSSProperties, useState } from "react";

type Props = {
  options: string[];
  selectedIndex: number;
  onclick: () => void;
};

export function Navigation({ options, selectedIndex, onclick }: Props) {
  const styleOptions = { "--options": options.length } as CSSProperties;
  {
    console.log(styleOptions);
  }
  return (
    <>
      <div className="cellphone__navigation">
        {options.map((opt, index) => {
          return (
            <div key={index} className="navigation__element">
              {opt}
            </div>
          );
        })}
        <div
          className="navigation__hover"
          style={
            {
              ...styleOptions,
              "--selected-option": selectedIndex,
            } as CSSProperties
          }
        ></div>
      </div>
    </>
  );
}
