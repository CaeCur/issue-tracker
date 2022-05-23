import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caelan&apos;s Issue Tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Hello
    </div>
  );
}
