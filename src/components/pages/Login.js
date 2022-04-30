import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import LoginIllustration from "../LoginIllustration";
import Textinput from "../Textinput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <LoginIllustration />
        <Form className={`${classes.login}`}>
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
