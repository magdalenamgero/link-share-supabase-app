import { Navbar } from "@/components/navbar/Navbar";
import { login, signup } from "./actions";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <>
      <Navbar title="DevLink" />
      <section className={styles.formContainer}>
        <h1 className={styles.h1}>Hello There!</h1>
        <h2 className={styles.h2}>
          Let&apos;s sign you in, or create your account.
        </h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            placeholder="password"
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
