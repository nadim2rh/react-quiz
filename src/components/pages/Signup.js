import classes from "../../styles/Siugnup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <Textinput type="text" placeholder="Enter name" icon="person" />
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter Password" icon="lock" />
          <Textinput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}