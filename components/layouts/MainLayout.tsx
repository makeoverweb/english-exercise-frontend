import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import styles from "../../styles/mainLayout.module.css";
import Header from "../for-pages/home/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { setIsAuth } = useActions();

  useEffect(() => {
    setIsAuth(Boolean(localStorage?.getItem("token")));
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
