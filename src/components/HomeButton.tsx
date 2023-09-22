import { MouseEvent } from "react";
export function HomeButton({
  onclick,
}: {
  onclick: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <div className="home_button">
        <button onClick={(e) => onclick(e)}></button>
      </div>
    </>
  );
}
