import { div } from "three/webgpu";
import { CardSpotlight } from "./ui/card-spotlight";
import Image from "next/image";

export const SportsCard = () => {
  return (
    <div className="items-cent">
      <CardSpotlight className="h-96 w-96 cursor-pointer">
        <div className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold relative z-20 text-white mr-4">
              Sports
            </h2>
            <Image
              src="/sports.png"
              alt="Casino Icon"
              width={40}
              height={40}
              className="relative z-20"
            />
          </div>
          <div className="text-white mt-4 relative z-20">
            Bet on your favorite sports:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Football, Basketball, Tennis</li>
              <li>Live in-play betting</li>
              <li>Competitive odds</li>
              <li>Virtual sports available 24/7</li>
            </ul>
          </div>
          <p className="text-gray-200 mt-6 relative z-20 text-sm">
            Stay ahead of the game with real-time updates and expert analysis.
          </p>
        </div>
      </CardSpotlight>
      <button className="mt-6 bg-white w-full  font-semibold py-2 px-4 rounded-lg  transition duration-300 ">
        Go to Sportsbook
      </button>
    </div>
  );
};
