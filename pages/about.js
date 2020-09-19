import Head from 'next/head';
import PillNavigation from '../components/PillNavigation';
import menuItems from '../data/navMenu.json';

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Head>
        <title>about | vidur.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className="text-center">vidur.dev</h1>

      <PillNavigation items={menuItems} active="about" />
      <p className="text-center">
        This is the personal website of Vidur Butalia.
      </p>
    </main>
  );
}
