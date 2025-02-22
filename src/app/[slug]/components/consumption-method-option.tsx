import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  altUrl: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageUrl,
  altUrl,
  buttonText,
  option,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageUrl} alt={altUrl} fill className="object-contain" />
        </div>
        <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
          <Button variant="secondary" className="rounded-full">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
