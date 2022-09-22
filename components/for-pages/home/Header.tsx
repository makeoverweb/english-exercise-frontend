import Link from "next/link";
import Navbar from "./Navbar";
import styles from "../../../styles/header.module.css";
import logo from "../../icons/logo.png";
import Image from "next/image";
import AuthMenu from "./AuthMenu";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const Header = () => {
  const { isAuth } = useTypedSelector((state) => state.userReducer);
  return (
    <div className={styles.root}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <Navbar />
      {!isAuth && <AuthMenu />}
    </div>
  );
};

export default Header;
