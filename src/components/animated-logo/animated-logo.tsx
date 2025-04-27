"use client";

import { animate, createScope, createSpring } from "animejs";
import { useEffect, useRef, useState } from "react";
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
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root }).add(() => {
      // if (isShow) {
      //   animate(".logo", {
      //     scale: [
      //       { to: 1.25, ease: "inOut(3)", duration: 200 },
      //       { to: 1, ease: createSpring({ stiffness: 300 }) },
      //     ],
      //   });
      // }
      animate(".logo", {
        rotate: {
          from: "-2turn",
          // delay: 0,
        },
        // ease: "out(4)",
        duration: 3000,
      });
      // if (!isShow) {
      // } else {
      //   animate(".logo", {
      //     rotate: 180,
      //     // ease: "out(4)",
      //     duration: 1500,
      //   });
      // }
      // self.add("rotateLogo", (i: number) => {
      // });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, [isShow]);

  // const handleClick = () => {
  //   setRotations((prev) => {
  //     const newRotations = prev + 1;
  //     // Animate logo rotation on click using the method declared inside the scope
  //     scope.current?.methods.rotateLogo(newRotations);
  //     return newRotations;
  //   });
  // };

  console.log("isShow", isShow);

  return (
    <div ref={root} className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <img src={logoSrc} className={cn("logo", className)} alt={alt} />
      </div>
    </div>
  );
}
