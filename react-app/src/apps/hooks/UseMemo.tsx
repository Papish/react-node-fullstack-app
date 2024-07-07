import { memo, useCallback, useMemo, useState } from "react";

type User = {
  name: string;
};

export default function HookUseMemo() {
  const [users, setUser] = useState<User[]>([
    {
      name: "Test",
    },
  ]);

  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const memoizedUsers = useMemo(() => {
    console.log("parent memoized function called");
    return users;
  }, [users]);

  // const parentFn = useCallback(() => {
  //   setUser([...users, { name: "New Test" }]);
  // }, [users]);

  const parentFn = () => {
    setUser([...users, { name: "New Test" }]);
  };

  return (
    <div>
      <h4>UseMemo</h4>
      Counter: {counter}
      <button type="button" onClick={inc}>
        Inc
      </button>
      <ChildMemo users={memoizedUsers} childFn={parentFn} />
    </div>
  );
}

type Props = {
  users: User[];
  childFn: () => void;
};

const Child = (props: Props) => {
  console.log("child rendered");

  const { users, childFn } = props;

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
      <button onClick={childFn}>Child Btn</button>
    </div>
  );
};

const ChildMemo = memo(Child);
