import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
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
      case "=":
        setOutput(eval(input));
        setInput("");
        break;
      default:
        setInput((input) => input + content);
    }
  }
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation
          options={["calcolatrice", "altro"]}
          selectedIndex={selectedOption}
          onclick={handleNavigation}
        />
        <Display input={input} output={output} />
        <KeyPad onClick={handleKeypad} />
      </div>
    </div>
  );
}

export default App;
