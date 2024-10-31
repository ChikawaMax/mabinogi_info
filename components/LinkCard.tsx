import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link';

export const LinkCards = ({
  imgName,
  title,
}: {
  imgName: string;
  title: string;
}) => {
  return (
    <Card className="overflow-hidden">
      <Link href={`/${imgName}`}>
        <CardContent className="p-0">
          <AspectRatio ratio={3 / 2}>
            <img
              src={`/${imgName}.png`}
              alt={imgName}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold hover:border-b inline-block">
              {title}
            </h2>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
