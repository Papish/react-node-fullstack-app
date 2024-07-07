import { useRef, useState } from "react";

export default function HookUseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  const update = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("count: ", count);
    console.log("countRef: ", countRef.current);
  };

  return (
    <div>
      <h4>UseRef</h4>
      <div>Count: {count}</div>
      <button onClick={update}>Update</button>
    </div>
  );
}
