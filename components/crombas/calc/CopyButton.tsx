import { CalcObj } from '@/app/typs/types';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CopyButton = ({ calc }: { calc: CalcObj }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const Answer = (): number => {
    const a = calc.index1;
    const b = calc.index2;
    const c = calc.index3;
    if (calc.calc1 === 'plus') {
      if (calc.calc2 === 'plus') {
        return a + b + c;
      } else if (calc.calc2 === 'minus') {
        return a + b - c;
      } else {
        return a + b * c;
      }
    } else if (calc.calc1 === 'minus') {
      if (calc.calc2 === 'plus') {
        return a - b + c;
      } else if (calc.calc2 === 'minus') {
        return a - b - c;
      } else {
        return a - b * c;
      }
    } else {
      if (calc.calc2 === 'plus') {
        return a * b + c;
      } else if (calc.calc2 === 'minus') {
        return a * b - c;
      } else {
        return a * b * c;
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Answer() + calc.text);
    setCopyMessage('コピーしました');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  return (
    <div className="mt-5 font-bold">
      <span className="mr-2">計算結果： {Answer() + calc.text}</span>
      <Button onClick={handleCopy}>コピー</Button>
      {copyMessage && <span className="ml-3">{copyMessage}</span>}
    </div>
  );
};

export default CopyButton;
