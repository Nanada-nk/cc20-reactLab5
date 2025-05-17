/** @format */

import React, { useState } from "react";
import * as cowsay from "cowsay";
import Cowsay from "./Cowsay.jsx";
import fiveCows from "./utils.js";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [sayObj, setSayObj] = React.useState({
    text: inputText || "Hello..",
    cow: cowsay["ATAT"],
  });
  const [scale, setScale] = React.useState(0.7);

  const [allCows, setAllCows] = React.useState(fiveCows());

  const [isShow, setIsShow] = React.useState(true)

  const changeCow = (cow) => {
    setSayObj({ ...sayObj, cow: cowsay[cow] });
  };
  const updateScale = (x) => {
    setScale(scale + x);
  };
  const hdlChange = (evt) => {
    // console.log(evt.target.outerHTML)
    // console.log(evt.target.value)
    setInputText(evt.target.value);
  };

  return (
    <div className="app">
      <input
        type="checkbox"
        value="retro"
        className="toggle theme-controller"
      />

      <h1>Select Character</h1>
      <div classname="flex">
        {/* <button onClick={()=>changeCow('BUNNY')}>BUNNY</button>
        <button onClick={()=>changeCow('CAT')}>CAT</button>
        <button onClick={()=>changeCow('KOALA')}>KOALA</button> */}
        {allCows.map((el, i) => (
          <button className="border-2" key={i} onClick={() => changeCow(el)}>
            {el}
          </button>
        ))}
      </div>
      <p>
        <button onClick={() => setAllCows(fiveCows())}>scramble</button>
      </p>
      <p>
        <input value={inputText} onChange={hdlChange} />
        <button onClick={() => setSayObj({ ...sayObj, text: inputText })}>
          update message
        </button>
      </p>
      <p>
        <button onClick={() => updateScale(-0.1)}>Smaller</button>
        <button onClick={() => updateScale(0.1)}>Bigger</button>
      </p>
      <hr />
      <button className="btn" onClick={() => setIsShow(!isShow)}>Close Cow</button>
      {isShow &&<Cowsay sayObj={sayObj} scale={scale} />}
    </div>
  );
}

export default App;
