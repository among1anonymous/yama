"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { CollisionMechanism } from "./collision";

export const BackgroundBeamsWithCollision = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
  
    const beams = [
      {
        initialX: 10,
        translateX: 10,
        duration: 7,
        repeatDelay: 3,
        delay: 2,
      },
      {
        initialX: 600,
        translateX: 600,
        duration: 3,
        repeatDelay: 3,
        delay: 4,
      },
      {
        initialX: 100,
        translateX: 100,
        duration: 7,
        repeatDelay: 7,
        className: "h-6",
      },
      {
        initialX: 400,
        translateX: 400,
        duration: 5,
        repeatDelay: 14,
        delay: 4,
      },
      {
        initialX: 800,
        translateX: 800,
        duration: 11,
        repeatDelay: 2,
        className: "h-20",
      },
      {
        initialX: 1000,
        translateX: 1000,
        duration: 4,
        repeatDelay: 2,
        className: "h-12",
      },
      {
        initialX: 1200,
        translateX: 1200,
        duration: 6,
        repeatDelay: 4,
        delay: 2,
        className: "h-6",
      },
    ];
  
    return (
      <div
        ref={parentRef}
        className={cn(
          "h-96 md:h-[40rem] bg-black relative flex items-center w-full justify-center overflow-hidden",
          className
        )}
      >
        {beams.map((beam) => (
          <CollisionMechanism
            key={beam.initialX + "beam-idx"}
            beamOptions={beam}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}
  
        {children}
        <div
          ref={containerRef}
          className="absolute bottom-0 bg-neutral-950 z-0 w-full inset-x-0 pointer-events-none"
          style={{
            boxShadow:
              "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
          }}
        ></div>
      </div>
    );
  };
  