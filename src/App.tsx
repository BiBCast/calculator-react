import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
import { HomeButton } from "./components/HomeButton";
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
      case "=":
        try {
          setOutput(input !== "" ? eval(input) : output);
          setHistory((history) => {
            return [...history, { operations: input, result: output }];
          });
        } catch (err) {}
        setInput("");
        break;
      case "AC":
        setInput("");
        break;
      case "+/-":
        const regex_inverse = /\d+[\.]?\d*$/g;
        const regex_no_check = /[-+]\d+[\.]?\d*$/g;
        if (!regex_inverse.test(input)) {
          break;
        }
        let match_value = input.match(regex_inverse)[0];
        if (regex_no_check.test(input)) {
          match_value = input.match(regex_no_check)[0];
          match_value = "-" + match_value.slice(1);
        } else {
          match_value = "-" + match_value;
        }
        let prefix = input.slice(
          0,
          input.length - match_value.length <= 0
            ? 0
            : input.length - match_value.length
        );
        setInput(prefix + match_value);
        break;

      case "%":
        const regex_float = /\d*$/g;
        const regex_float_no_check = /\.+\d*$/g;
        if (!regex_float.test(input)) {
          break;
        }
        if (regex_float_no_check.test(input)) {
          break;
        }
        let match_float_value = input.match(regex_float)[0];

        match_float_value = "0." + match_float_value;

        let prefix_float = input.slice(
          0,
          input.length >= match_float_value.length
            ? input.length - match_float_value.length
            : 0
        );
        setInput(prefix_float + match_float_value);
        break;
      default:
        setInput((input) => input + content);
    }
  }
  function handleHomeButton(e: MouseEvent<HTMLButtonElement>) {
    setInput("");
    setOutput("");
    setHistory([]);
  }

  function handleBackArrow() {
    setInput((input) => input.slice(0, -1));
  }
  function handlePopup(e: MouseEvent<HTMLDivElement>) {
    /* assumed exist , cheched hiding the popup */
    if (history.length < 0) return;
    const desc_history = history[history.length - 1];
    setInput(desc_history.operations);
    setOutput(desc_history.result);
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
