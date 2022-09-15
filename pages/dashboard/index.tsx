import { Button } from "antd";
import { useLogoutMutation } from "../../services/authService";
import styles from "../../styles/dashboard.module.css";

const Dashboard = () => {
  const [logout] = useLogoutMutation();

  const logoutHandler = () => {
    logout({ email: "femakeoverweb@gmail.com", password: "root" });
  };

  return (
    <div className={styles.dashboard}>
      <Button type="primary" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
