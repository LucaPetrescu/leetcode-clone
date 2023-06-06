import Navbar from "../../Components/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeContext } from "../../Contexts/ThemeContext";
import FallBackComponent from "../../ErroHandling/FallBackComponent";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ErrorBoundary FallbackComponent={FallBackComponent}>
        <Navbar />
      </ErrorBoundary>
      <div className={`${styles.container} ${styles[theme]}`}>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
