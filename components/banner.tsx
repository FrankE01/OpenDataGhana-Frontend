"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <header className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h1 className="text-[44px] font-bold">
          Unlock the power in Ghana&apos;s data
        </h1>
        <p className="my-4">
          Get access to a rich collection of Ghanaian-centric datasets and
          curated links. Explore, analyze, and build with data that comes from{" "}
          <strong>YOU</strong>.
        </p>
        <Button className="rounded-full w-fit my-8">Explore Datasets</Button>
      </div>
      <div className="relative">
        <Image
          src={"/images/dark1.png"}
          alt="hands in"
          width={450}
          height={400}
          className="mx-auto filter dark:saturate-30 dark:brightness-70 dark:hue-rotate-0 saturate-150 brightness-110 hue-rotate-180"
        />
      </div>
    </header>
  );
};

export default Banner;
