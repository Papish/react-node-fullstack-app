import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  age?: number;
};

const FocusElement = () => {
  const el = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (el) el.current?.focus();
  }, []);

  return (
    <div>
      Focus on load: <input type="text" ref={el} />
    </div>
  );
};

const UsingKeyOnMap = () => {
  const foodItems = [
    { id: "1", value: "milk" },
    { id: "2", value: "bread" },
    { id: "3", value: "sugar" },
  ];

  const [items, setItems] = useState(foodItems);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const removeItem = (item: any) => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      <h2>Unique key bug using index</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}
            <input id={`${item.id}-input`} defaultValue={item.value} />
            <button onClick={() => removeItem(item)}>X</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

type User = string;

function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    resolve(["test"]);
  });
}

export default function Child(props: Props) {
  const { children, age } = props;

  const init = async () => {
    await fetchUsers();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {children} : Props {age ? age : "default age"}
      <br />
      <br />
      <br />
      <FocusElement />
      <br />
      <br />
      <br />
      <UsingKeyOnMap />
    </>
  );
}
