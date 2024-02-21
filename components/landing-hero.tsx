"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
// import Tilt from "react-parallax-tilt"; // this is how you get that funky tilt effect
// import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  // const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h2>Hello! My name is Neal. </h2>
        
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <h3>I am a </h3>
          <TypewriterComponent
            options={{
              strings: [
                "Data Scientist",
                "Machine Learning Engineer",
                "Project Manager",
                "Chemical Engineer",
                "Pianist",
                "Soccer Player",
                "Hiker",
                "Cyclist",
                "Skier",
              ],
              autoStart: true,
              loop: true,
              // wrapperClassName: "Typewriter__cursor"
            }}
          />
        </div>
      </div>
      {/* <div className="text-sm md:text-xl font-light text-zinc-400">
        Learn Jazz Piano 10x faster.
      </div> */}
      <div>
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="ghost" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Learning For Free
          </Button>
        </Link> */}
      </div>
      {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
  );
};
