import React from "react";
import ReactDOM from "react-dom";
import MyReader from './components/qrReader'
import MyCanvas from './components/sigCanvas'

const App = () => {
  return (
    <div>
      <MyReader />
      <h2>Sign below</h2>
      <MyCanvas />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));