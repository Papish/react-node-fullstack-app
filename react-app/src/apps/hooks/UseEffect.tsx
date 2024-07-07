import { useEffect, useLayoutEffect, useState } from "react";

export default function HookUseEffect() {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter - 1);
  };

  useEffect(
    () => {
      console.log("effect called");

      return () => {
        console.log("component clean up execute");
      };
    },
    // if we dont pass second param to useEffect it gets called
    // on every rerender in this case when counter is updated

    // if we pass empty [] array, then its get called initial render only

    // if we pass [counter] then it gets called only when counter is changed
    []
  );

  useLayoutEffect(() => {
    console.log("layout effect called");
  }, []);

  return (
    <div>
      <h4>UseEffect</h4>
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
