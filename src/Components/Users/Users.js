import { useUsersStore } from "../../appStore";
import UserIds from "./UserIds";
import UserNames from "./UserNames";

const Users = () => {
  const handleChangeId = () => {
    useUsersStore.setState({
      ATL: 22,
    });
  };

  return (
    <div>
      <UserNames />
      <UserIds />
      <button onClick={handleChangeId}>change ATL Id</button>
    </div>
  );
};

export default Users;
