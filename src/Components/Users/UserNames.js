import { useShallow } from "zustand/react/shallow";
import { useUsersStore } from "../../appStore";

const UserNames = () => {
    console.log('render from UserNames')

  const names = useUsersStore((state) => Object.keys(state));
  //const names = useUsersStore(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};

export default UserNames;
