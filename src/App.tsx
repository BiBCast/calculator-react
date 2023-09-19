import { useState } from "react";
import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
function App() {
  const [selectedOption, setSelectedOptions] = useState<number>(2);
  {
    console.log(selectedOption);
  }
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation
          options={["mario", "gigi", "pè"]}
          selectedIndex={selectedOption}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
