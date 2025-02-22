import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  imageUrl: string;
  altUrl: string;
  buttonText: string;
}

const ConsumptionMethodOption = ({
  imageUrl,
  altUrl,
  buttonText,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageUrl} alt={altUrl} fill className="object-contain" />
        </div>
        <Button variant="secondary" className="rounded-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;
