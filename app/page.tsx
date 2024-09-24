import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <ul className="mt-5 mx-5 list-inside list-disc">
        <li className="hover:underline">
          <Link href={'/trade'}>物々交換リスト</Link>
        </li>
        <li className="hover:underline">
          <Link href={'/crombas'}>クロムバス</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
