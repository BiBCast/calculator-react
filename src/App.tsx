import { useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
function App() {
  const [selectedOption, setSelectedOptions] = useState<number>(0);

  function handleChange(index: number) {
    setSelectedOptions(index);
  }
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation
          options={["mario", "dfgdfgg", "ciao"]}
          selectedIndex={selectedOption}
          onclick={handleChange}
        />
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
