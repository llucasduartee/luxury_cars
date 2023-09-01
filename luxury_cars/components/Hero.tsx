"use client";
import Image from "next/image";
import { Button } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent luxury cars – easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your dream car rental experience with our effortless
          booking process.
        </p>
        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Car image"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
