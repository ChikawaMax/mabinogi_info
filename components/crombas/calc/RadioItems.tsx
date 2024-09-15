import { Label } from '../../ui/label';
import { RadioGroupItem } from '../../ui/radio-group';

const texts: string[] = [
  'インボリック',
  'ベルテン',
  'ルーナサ',
  'サーオィン',
  'バス',
];

const RadioItems = () => {
  return (
    <>
      {texts.map((text) => (
        <div className="flex items-center space-x-2" key={text}>
          <RadioGroupItem value={text} id={text} />
          <Label htmlFor={text}>{text}</Label>
        </div>
      ))}
    </>
  );
};

export default RadioItems;
