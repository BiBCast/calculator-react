import back_arrow from "../image/flip-backward.svg";
export function Display({
  input,
  output,
  onclick,
}: {
  input: string;
  output: string;
  onclick: () => void;
}) {
  return (
    <>
      <div className="cellphone__display">
        <div className="display__output">
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
