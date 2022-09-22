import { Form, Input, Button } from "antd";
import { useSignUpMutation } from "../../services/authService";
import styles from "../../styles/signup.module.css";

const SignUp = () => {
  const [signUp] = useSignUpMutation();

  const signUpHandler = () => {
    signUp({ email: "femakeoverweb@gmail.com", password: "root" });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.root}>
      <div className={styles.title}>Registration</div>
      <Form
        name="signup"
        initialValues={{ remember: true }}
        onFinish={signUpHandler}
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
