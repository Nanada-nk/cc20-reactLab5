import * as cowsay from "cowsay"

let cs = Object.keys(JSON.parse(JSON.stringify(cowsay)))
const fiveCows = () =>
  Array.from({ length: 5 }, () => cs[Math.floor(Math.random() * 189)]);

// function isNumber() {}

// export { fiveCows , isNumber }

export default fiveCows

// export default () =>
//   Array.from({ length: 5 }, () => cs[Math.floor(Math.random() * 189)]);