import logo from "./logo.svg";
import "./App.css";

import UseStateHook from "./UseStateHook";
import UseReducerHook from "./UseReducerHook";
import UserEffectHook from "./UseEffectHook";

function App() {
  return (
    <div className="App">
      <UseStateHook></UseStateHook>
      <hr></hr>
      <UseReducerHook></UseReducerHook>
      <hr></hr>
      <UserEffectHook></UserEffectHook>
    </div>
  );
}

export default App;
