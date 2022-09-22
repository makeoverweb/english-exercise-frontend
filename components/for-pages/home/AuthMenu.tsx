import { Button } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import {
  useSignInMutation,
  useSignUpMutation,
} from "../../../services/authService";
import styles from "../../../styles/authMenu.module.css";

const AuthMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <Button type="primary" onClick={() => router.push("./signin")}>
        Sign In
      </Button>
      <Button type="primary" onClick={() => router.push("./signup")}>
        Sign Up
      </Button>
    </div>
  );
};

export default AuthMenu;
