import { useUsersStore } from "../../appStore";

const UserIds = () => {
    console.log('render from UserIds')
  const ids = useUsersStore((state) => Object.values(state));

  return <div>{ids.join(", ")}</div>;
};

export default UserIds;
