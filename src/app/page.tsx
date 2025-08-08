"use client";
import Image from "next/image";
import Github from "./components/Github";
import GeeksForGeeks from "./components/GeeksForGeeks";
import Projects from "./components/Projects";
import { diplomskiURL, linkedinURL } from "@/lib/types";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-3">
      <div className="col-span-1 flex flex-col gap-4 sm:py-10 px-12">
        <Image
          src="/me.jpeg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Ilija Dimitrijevic</h1>
          <p className="text-font-secondary">Software developer</p>
        </div>

        <div
          onClick={() => window.open(linkedinURL, "_blank")}
          className="w-full flex gap-2 items-center  hover:scale-[103%] duration-200 cursor-pointer"
        >
          <div className="max-w-fit max-h-fit shadow-sm rounded">
            <Image
              src={"/linkedin.png"}
              className="rounded"
              alt="raf"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs sm:text-sm">@ilijja</p>
        </div>

        <div
          onClick={() => window.open(diplomskiURL, "_blank")}
          className="w-full flex gap-2 items-center hover:scale-[103%] duration-200 cursor-pointer"
        >
          <div className="border bored-zinc-100 max-w-fit max-h-fit shadow-sm rounded">
            <Image
              src={"/raf.jpeg"}
              className="rounded"
              alt="raf"
              width={36}
              height={36}
            />
          </div>
          <p className="text-xs sm:text-sm">
            Bachelor's Degree in Computer Science, Racunarski Fakultet, Belgrade
          </p>
        </div>

        <Github />
        <GeeksForGeeks />
      </div>
      <div className="col-span-2 p-4  px-12">
        <Projects />
      </div>
    </div>
  );
}
