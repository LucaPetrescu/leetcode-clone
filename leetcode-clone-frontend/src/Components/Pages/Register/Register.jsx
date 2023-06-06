import styles from "./Register.module.css";
import Navbar from "../../Components/Navbar";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallBackComponent from "../../ErroHandling/FallBackComponent";
import React, { useContext } from "react";

function Register() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ErrorBoundary FallbackComponent={FallBackComponent}>
        <Navbar />
      </ErrorBoundary>
      <div className={`${styles.container} ${styles[theme]}`}>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <div class="login-link">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
