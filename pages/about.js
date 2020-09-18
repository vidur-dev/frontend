import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <Head>
        <title>about | vidur.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className={styles.text}>vidur.dev</h1>

      <div className={styles.nav}>
        <Link href="/">
          <a className={styles.button}>home</a>
        </Link>
        <Link href="/Resume - Vidur Butalia.pdf">
          <a className={[styles.button, styles.resume].join(' ')}>resume</a>
        </Link>
        <Link href="https://github.com/vidurb">
          <a className={[styles.button, styles.code].join(' ')}>code</a>
        </Link>
      </div>

      <p className={styles.text}>
        This is the personal website of Vidur Butalia, a web developer and
        all-around geek from New Delhi, India. <br />
        My interests include technology & programming, video games, history,
        music and political economy. <br />
        I produce beautiful web sites, simple and effective code, empty beer
        cans and invective. <br />
      </p>
    </main>
  );
}
