import { createContext, useContext, useState } from "react";

type TUserContext = {
  name: string;
  updateUser: (name: string) => void;
};

const UserContext = createContext<TUserContext | undefined>(undefined);

const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("");
  }

  return user;
};

export default function ContextApi() {
  const [user, setUser] = useState("");

  const updateUser = (name: string) => {
    setUser(name);
  };

  return (
    <UserContext.Provider value={{ name: user, updateUser }}>
      <UserCard />
      <SetUser />
    </UserContext.Provider>
  );
}

// consumers
function UserCard() {
  const user = useUserContext();
  return <div>{user.name}</div>;
}

function SetUser() {
  const user = useUserContext();
  return (
    <button
      type="button"
      onClick={() => {
        user.updateUser("some name");
      }}
    >
      Set User
    </button>
  );
}
