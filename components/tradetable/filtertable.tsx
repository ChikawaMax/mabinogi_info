import { Dispatch, SetStateAction } from 'react';
import { Button } from '../ui/button';

export const Filtertable = ({
  trades,
  filtable,
  setFiltable,
}: {
  trades: TradeObj[];
  filtable: TradeObj[];
  setFiltable: Dispatch<SetStateAction<TradeObj[]>>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;
    setFiltable(
      text === '全て表示'
        ? trades
        : trades.filter((table) => table.location === text)
    );
  };

  return (
    <div className="flex gap-3 my-4">
      <Button onClick={handleClick}>全て表示</Button>
      <Button onClick={handleClick}>オアシス</Button>
      <Button onClick={handleClick}>カリダ</Button>
      <Button onClick={handleClick}>カルー森</Button>
      <Button onClick={handleClick}>ペラ</Button>
    </div>
  );
};
