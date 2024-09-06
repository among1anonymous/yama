import About from "@/components/about";
import CountdownTimer from "@/components/countdown";
import { NavDock } from "@/components/navdock";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";


export default function Home() {
  return (
    <div className="relative min-h-screen">
    
      <div className="relative z-10 pb-16 px-4 md:px-8">
       
        <div className="mb-8">
          <CountdownTimer />
        </div>
        
        <BackgroundBeamsWithCollision>
          <div className="max-w-3xl mx-auto">
            <About />
          </div>
        </BackgroundBeamsWithCollision>
        
      </div>

     
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <NavDock />
      </div>
    </div>
  );
}
