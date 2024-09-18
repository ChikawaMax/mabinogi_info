'use client';

import InputCalc from '@/components/crombas/calc/InputCalc';
import Radio from '@/components/crombas/calc/Radio';
import Toggles from '@/components/crombas/calc/Toggles';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalcObj } from '@/app/typs/types';

const CalcPage = () => {
  const [calc, setCalc] = useState<CalcObj>({
    index1: 0,
    index2: 0,
    index3: 0,
    calc1: 'plus',
    calc2: 'plus',
    text: 'インボリック',
  });

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

  return (
    <section>
      <h1 className="text-2xl my-4 ml-4">クロムバス攻略</h1>
      <div className="border p-4 mx-3 rounded-md">
        <h3>メモ計算</h3>
        <div className="flex gap-3 my-4">
          <InputCalc calc={calc} setCalc={setCalc} getname="index1" />
          <Toggles setCalc={setCalc} field="calc1" />
          <InputCalc calc={calc} setCalc={setCalc} getname="index2" />
          <Toggles setCalc={setCalc} field="calc2" />
          <InputCalc calc={calc} setCalc={setCalc} getname="index3" />
        </div>

        <Radio setCalc={setCalc} />
        <div className="mt-5 font-bold">
          <span className="mr-2">計算結果： {Answer() + calc.text}</span>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(Answer() + calc.text);
              alert('コピーしました。');
            }}
          >
            コピー
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CalcPage;
