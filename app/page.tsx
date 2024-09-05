import About from "@/components/about";
import CountdownTimer from "@/components/countdown";
import { NavDock } from "@/components/navdock";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10 pb-16">
        <CountdownTimer />
        <BackgroundBeamsWithCollision>

          <About />
        </BackgroundBeamsWithCollision>
        
        
      </div>
      <NavDock />
    </div>
  );
}
