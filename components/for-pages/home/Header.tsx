import Link from "next/link";
import Navbar from "./Navbar";
import styles from "../../../styles/header.module.css";
import logo from "../../icons/logo.png";
import Image from "next/image";
import AuthMenu from "./AuthMenu";

const Header = () => {
  return (
    <div className={styles.root}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <Navbar />
      <AuthMenu />
    </div>
  );
};

export default Header;
