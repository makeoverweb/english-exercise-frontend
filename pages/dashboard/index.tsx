import { Button } from "antd";
import { useLogoutMutation } from "../../services/authService";
import { useLazyFetchUsersQuery } from "../../services/usersService";
import styles from "../../styles/dashboard.module.css";

const Dashboard = () => {
  const [logout] = useLogoutMutation();
  const [getUsers, { data }] = useLazyFetchUsersQuery();

  const logoutHandler = () => {
    logout({ email: "femakeoverweb@gmail.com", password: "root" });
  };

  console.log("data", data);

  // const getUsersHandler = () => {
  //   getUsers();
  // };

  return (
    <div className={styles.dashboard}>
      <Button type="primary" onClick={logoutHandler}>
        Logout
      </Button>
      {/* <Button type="primary" onClick={getUsersHandler}>
        GetUsers
      </Button> */}
    </div>
  );
};

export default Dashboard;
