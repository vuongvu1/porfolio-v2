"use client";

import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/app/provider";
import { cn } from "@/utils/cn";

interface AnimatedLogoProps {
  logoSrc: string;
  alt?: string;
  className?: string;
}

export function AnimatedLogo({
  logoSrc,
  alt = "Logo",
  className,
}: AnimatedLogoProps) {
  const { isShow } = useAppContext();
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root }).add(() => {
      animate(".logo", {
        rotate: {
          from: "-2turn",
        },
        duration: 3000,
      });
    });

    return () => scope.current.revert();
  }, [isShow]);

  return (
    <div ref={root} className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <img src={logoSrc} className={cn("logo", className)} alt={alt} />
      </div>
    </div>
  );
}
