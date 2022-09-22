import { Form, Input, Checkbox, Button } from "antd";
import router from "next/router";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import {
  useSignInMutation,
} from "../../services/authService";
import styles from "../../styles/signin.module.css";

const SignIn = () => {
  // const { isAuth } = useTypedSelector((state) => state.userReducer);
  const [signIn, { isSuccess }] = useSignInMutation();
  const { setIsAuth } = useActions();

  const signInHandler = (values: any) => {
    signIn({ email: values.email, password: values.password });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
      router.push("./dashboard");
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.root}>
      <div className={styles.title}>SignIn</div>
      <Form
        name="signin"
        initialValues={{ remember: true }}
        onFinish={signInHandler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
