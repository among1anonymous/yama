import About from "@/components/about";
import CountdownTimer from "@/components/countdown";
import { Deceptions } from "@/components/deceptionstext";

import { NavDock } from "@/components/navdock";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";
import { EvervaultCard } from "@/components/ui/hover-timer";


export default function Home() {
  return (
    <>
    <EvervaultCard />
    <BackgroundBeamsWithCollision>
        <div className="mt-10">
            <About />
        </div>
    </BackgroundBeamsWithCollision>     
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <NavDock />
    </div>
    
    </>
  );
}
