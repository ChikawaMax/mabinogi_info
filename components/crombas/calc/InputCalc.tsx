import { CalcObj } from '@/app/types/types';
import { Input } from '@/components/ui/input';
import { Dispatch, SetStateAction } from 'react';

const InputCalc = ({
  calc,
  setCalc,
  getname,
}: {
  calc: CalcObj;
  setCalc: Dispatch<SetStateAction<CalcObj>>;
  getname: 'index1' | 'index2' | 'index3';
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalc((prevCalc) => ({
      ...prevCalc,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <Input
      className="border-white w-20"
      type="number"
      name={getname}
      value={calc[getname] === 0 ? '' : calc[getname]}
      onChange={handleChange}
    />
  );
};
export default InputCalc;
