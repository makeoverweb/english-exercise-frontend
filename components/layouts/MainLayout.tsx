import styles from "../../styles/mainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default MainLayout;
