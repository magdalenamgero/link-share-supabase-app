import { Navbar } from "@/components/navbar/Navbar";
import { login, signup } from "./actions";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <>
      <Navbar title="DevLink" />
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            email:
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            required
          />
          <label className={styles.label} htmlFor="password">
            password:
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            required
          />
          <div className={styles.buttonContainer}>
            <button className={styles.button} formAction={login}>
              Log In
            </button>
            <button className={styles.button} formAction={signup}>
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
