import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const CARD_STYLES = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2",
  back: "border-white/20 bg-pink",
  front: "rotate-y-180 border-purple-200 bg-white",
};

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative h-16 w-16 cursor-pointer" onClick={handleClick}>
      <div
        className={cn(
          `preserve-3d h-full w-full transition-transform duration-500`,
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(CARD_STYLES.base, CARD_STYLES.back)}>
          <Sparkles className="h-6 w-6 text-white" />
        </div>

        <div className={cn(CARD_STYLES.base, CARD_STYLES.front)}>🍬</div>
      </div>
    </div>
  );
};
