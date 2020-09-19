import Link from 'next/link';

export default function PillNavigation() {
  return (
    <div className="nav">
      <Link href="/">
        <a className="button">home</a>
      </Link>
      <Link href="/about">
        <a className="button">about</a>
      </Link>
      <Link href="/Resume - Vidur Butalia.pdf">
        <a className="button text-nord7 border-nord7">resume</a>
      </Link>
      <Link href="https://github.com/vidurb">
        <a className="button text-nord8 border-nord8">code</a>
      </Link>
    </div>
  );
}
