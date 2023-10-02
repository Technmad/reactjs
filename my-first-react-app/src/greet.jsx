import { createElement } from "react";

function Greeting() {
  return createElement("h1", { className: "greeting" }, "Hello World!");
}

export default Greeting;

// using createElement for creating new component
