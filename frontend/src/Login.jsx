import React from "react";
import styles from "./Login.module.css";;

const Login = () => {
  return (
    <div className={styles.login-container}>
      <div className={styles.login-box}>
        <h2 className={styles.h2}>Login</h2>
        <form>
          <div className={styles.input-group}>
            <label htmlFor="email">Username</label>
            <input type="email" id="email" placeholder="Enter your Username" required />
          </div>
          <div className={styles.input-group}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button className={styles.button} type="submit">Login</button>
          <p className={styles.signup-link}>
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
