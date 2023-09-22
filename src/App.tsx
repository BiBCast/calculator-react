import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
import { HomeButton } from "./components/HomeButton";
function App() {
  const [selectedOption, setSelectedOptions] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleNavigation(index: number) {
    setSelectedOptions(index);
  }
  function handleKeypad(e: MouseEvent<HTMLButtonElement>) {
    const content = e.currentTarget.innerHTML;
    switch (content) {
      case "AC":
        setInput("");
        break;
      case "+/-":
        const regex_inverse = /[-+]?\d+[\.]?\d*$/g;
        const regex_no_check = /[-+]{2,}?\d+[\.]?\d*$/g;
        if (!regex_inverse.test(input)) {
          break;
        }
        let match_value = input.match(regex_inverse)[0];

        if (regex_no_check.test("-" + input)) {
          break;
        }
        match_value = "-" + match_value;

        let prefix = input.slice(
          0,
          input.length + 1 - match_value.length <= 0
            ? 0
            : input.length + 1 - match_value.length
        );

        setInput(prefix + match_value);

        /* const regex_2 = /\d\.\d+$/g;
        const no_match_2 = /-\d\.\d+$/g;
        let regex_value_2 = input.match(regex_2);
        if (regex_value_2 !== null || !no_match_2.test(input)) {
          let regex_string = regex_value_2[0];
          let start_value = input.slice(0, input.length - regex_string.length);
          setInput(start_value + "-" + regex_string);
        } */
        break;
      case "=":
        try {
          setOutput(input !== "" ? eval(input) : output);
        } catch (err) {}
        setInput("");
        break;
      case "%":
        /* const regex = /\d+$/g;
        const no_match = /-\d\.\d+$/g;
        let regex_value = input.match(regex);
        if (regex_value !== null) {
          const regex_string = regex_value[0];
          let matched_value = input.slice(
            input.length - regex_string.length,
            input.length
          );
          let start_value = input.slice(0, input.length - matched_value.length);
          matched_value = "0." + matched_value;
          setInput(start_value + matched_value + " ");
        } */

        break;
      default:
        setInput((input) => input + content);
    }
  }
  function handleHomeButton(e: MouseEvent<HTMLButtonElement>) {
    setInput("");
    setOutput("");
  }

  function handleBackArrow() {
    setInput((input) => input.slice(0, -1));
  }
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation
          options={["calcolatrice", "altro"]}
          selectedIndex={selectedOption}
          onclick={handleNavigation}
        />
        <Display input={input} output={output} onclick={handleBackArrow} />
        <KeyPad onClick={handleKeypad} />
        <HomeButton onclick={handleHomeButton} />
      </div>
    </div>
  );
}

export default App;
function abs(arg0: number): number | undefined {
  throw new Error("Function not implemented.");
}
