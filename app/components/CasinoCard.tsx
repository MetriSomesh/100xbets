import { div } from "three/webgpu";
import { CardSpotlight } from "./ui/card-spotlight";
import Image from "next/image";

export const CasinoCard = () => {
  return (
    <div className="items-cent">
      <CardSpotlight className="h-96 w-96 cursor-pointer">
        <div className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold relative z-20 text-white mr-4">
              Casino
            </h2>
            <Image
              src="/casino.png"
              alt="Casino Icon"
              width={40}
              height={40}
              className="relative z-20"
            />
          </div>
          <div className="text-white mt-4 relative z-20">
            Experience the thrill of our online casino:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Wide variety of slot games</li>
              <li>Live dealer tables</li>
              <li>Poker rooms and tournaments</li>
              <li>Daily jackpots and bonuses</li>
            </ul>
          </div>
          <p className="text-gray-200 mt-6 relative z-20 text-sm">
            Enjoy responsible gaming with state-of-the-art security and fair
            play guarantees.
          </p>
        </div>
      </CardSpotlight>
      <button className="mt-6 bg-white w-full  font-semibold py-2 px-4 rounded-lg  transition duration-300 ">
        Go to Casino
      </button>
    </div>
  );
};
