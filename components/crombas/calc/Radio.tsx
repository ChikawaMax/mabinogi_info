'use client';

import { CalcObj } from '@/app/typs/types';
import RadioItems from '@/components/crombas/calc/RadioItems';
import { RadioGroup } from '@/components/ui/radio-group';
import { Dispatch, SetStateAction } from 'react';

const Radio = ({ setCalc }: { setCalc: Dispatch<SetStateAction<CalcObj>> }) => {
  const handleChange = (value: string) =>
    setCalc((prevCalc) => ({ ...prevCalc, text: value }));

  return (
    <RadioGroup defaultValue="インボリック" onValueChange={handleChange}>
      <RadioItems />
    </RadioGroup>
  );
};
export default Radio;
