import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center h-24 mx-5">
        <h1 className="text-3xl font-bold">
          <Link href={'/'}>マビノギ攻略</Link>
        </h1>
        <ul className="flex gap-3">
          <li className="hover:border-b">
            <Link href={'/trade'}>物々交換リスト</Link>
          </li>
          <li className="hover:border-b">
            <Link href={'/crombas'}>クロムバス</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
