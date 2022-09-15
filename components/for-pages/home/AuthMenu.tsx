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
  const { setIsAuth } = useActions();
  const { isAuth } = useTypedSelector((state) => state.userReducer);
  const [signIn, { isSuccess }] = useSignInMutation();
  const [signUp] = useSignUpMutation();

  const signInHandler = () => {
    signIn({ email: "femakeoverweb@gmail.com", password: "root" });
  };
  const signUpHandler = () => {
    signUp({ email: "femakeoverweb@gmail.com", password: "root" });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
      router.push("./dashboard");
    }
  }, [isSuccess]);

  return (
    <div className={styles.root}>
      <Button type="primary" onClick={signInHandler}>
        Sign In
      </Button>
      <Button type="primary" onClick={signUpHandler}>
        Sign Up
      </Button>
    </div>
  );
};

export default AuthMenu;
