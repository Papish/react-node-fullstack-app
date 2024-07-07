import { useState } from "react";

export default function HookUseState() {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h4>UseState</h4>
      Age: {counter}
      <button type="button" onClick={inc}>
        Inc
      </button>
      <button type="button" onClick={dec}>
        Dec
      </button>
    </div>
  );
}
