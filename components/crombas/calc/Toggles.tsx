'use client';

import { Dispatch, SetStateAction } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Toggles = ({
  setCalc,
  field,
}: {
  setCalc: Dispatch<SetStateAction<CalcObj>>;
  field: string;
}) => {
  const radioChange = (field: string) => (value: string) => {
    setCalc((prevCalc) => ({ ...prevCalc, [field]: value }));
  };

  return (
    <ToggleGroup
      type="single"
      size="sm"
      onValueChange={radioChange(field)}
      className="justify-start"
      defaultValue="plus"
    >
      <ToggleGroupItem value="plus"> + </ToggleGroupItem>
      <ToggleGroupItem value="minus"> - </ToggleGroupItem>
      <ToggleGroupItem value="times"> * </ToggleGroupItem>
    </ToggleGroup>
  );
};
export default Toggles;
