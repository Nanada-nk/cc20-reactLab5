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

  const [isShow, setIsShow] = React.useState(true);

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
    <div className="p-4 skeleton">
      <div className="bg-amber-50 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-3xl">Select Character</h1>

          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="valentine"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        <div>
          {/* <button onClick={()=>changeCow('BUNNY')}>BUNNY</button>
            <button onClick={()=>changeCow('CAT')}>CAT</button>
            <button onClick={()=>changeCow('KOALA')}>KOALA</button> */}
          {allCows.map((el, i) => (
            <button
              className="btn border-3 mr-2 mb-2"
              key={i}
              onClick={() => changeCow(el)}>
              {el}
            </button>
          ))}
        </div>

        <button className="btn" onClick={() => setAllCows(fiveCows())}>
          scramble
        </button>
        <div className="flex my-2">
          <input
            className="input mr-2"
            value={inputText}
            placeholder="Say Hello..."
            onChange={hdlChange}
          />
          <button
            className="btn"
            onClick={() => setSayObj({ ...sayObj, text: inputText })}>
            update message
          </button>
        </div>
        <button className="btn mr-2" onClick={() => updateScale(-0.1)}>
          Smaller
        </button>
        <button className="btn" onClick={() => updateScale(0.1)}>
          Bigger
        </button>
      </div>
      <hr className="m-4 border-1" />
      <div className="bg-white rounded-2xl p-4 h-245">
        <button className="btn mb-2" onClick={() => setIsShow(!isShow)}>
          Close Cow
        </button>
        <div className="text-center">

        {isShow && <Cowsay sayObj={sayObj} scale={scale} />}
        </div>
      </div>
    </div>
  );
}

export default App;
