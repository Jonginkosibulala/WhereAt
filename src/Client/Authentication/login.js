import "../../Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card p-4" style={{ width: "400px" }}>
          <h3>Events are already nearby</h3>
          <p>login</p>
          <form action="/">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter Username
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Enter Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter assword"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Login</button>
            </div>
            <span>Forgot password</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
