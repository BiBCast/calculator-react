import { MouseEvent, useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
import { HomeButton } from "./components/HomeButton";
import { floatCase, percentCase } from "./keypadMethod";
export type History = {
  operations: string;
  result: string;
};
function App() {
  const [selectedOption, setSelectedOptions] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<History[]>([]);

  function handleNavigation(index: number) {
    setSelectedOptions(index);
  }

  function handleKeypad(e: MouseEvent<HTMLButtonElement>) {
    const content = e.currentTarget.innerHTML;
    switch (content) {
      case "=": {
        let result: string;

        try {
          result = eval(input);
        } catch (err) {
          result = input;
        }
        setOutput(result);
        setHistory((history) => {
          return [...history, { operations: input, result: output }];
        });

        setInput("");
        break;
      }

      case "AC":
        setInput("");
        break;
      case "+/-": {
        const resultFloat = floatCase(input);
        if (resultFloat) setInput(resultFloat);
        break;
      }

      case "%": {
        const resultPercent = percentCase(input);
        if (resultPercent) setInput(resultPercent);

        break;
      }
      default:
        setInput((input) => input + content);
    }
  }
  function handleHomeButton() {
    setInput("");
    setOutput("");
    setHistory([]);
  }

  function handleBackArrow() {
    setInput((input) => input.slice(0, -1));
  }
  function handlePopup() {
    if (history.length < 0) return;
    const descHistory = history[history.length - 1];
    setInput(descHistory.operations);
    setOutput(descHistory.result);
    setHistory(history.slice(0, -1));
  }
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation
          options={["calcolatrice", "altro"]}
          selectedIndex={selectedOption}
          onclick={handleNavigation}
        />
        <Display
          input={input}
          output={output}
          handlePopup={handlePopup}
          onclick={handleBackArrow}
          history={history}
        />
        <KeyPad onClick={handleKeypad} />
        <HomeButton onclick={handleHomeButton} />
      </div>
    </div>
  );
}

export default App;
