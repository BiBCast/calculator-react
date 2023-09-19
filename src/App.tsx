import { Display } from "./components/Display";
import { KeyPad } from "./components/Keypad";
import { Navigation } from "./components/Navigation";
import "./index.css";
function App() {
  return (
    <div className="container">
      <div className="container__cellphone">
        <Navigation options={["mario", "gigi"]} />
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
