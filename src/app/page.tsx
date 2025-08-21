"use client";
import Image from "next/image";
import Github from "./components/Github";
import GeeksForGeeks from "./components/GeeksForGeeks";
import Projects from "./components/Projects";
import { diplomskiURL, linkedinURL, TechStackIcon } from "@/lib/types";
import TechStackIcons from "./components/TechStackIcons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-3">
      <div className="col-span-1 flex flex-col gap-4 sm:py-10 px-12 sm:px-8">
        <div className="flex w-full flex-col xl:flex-row items-start mt-4 justify-start  gap-2 lg:gap-8">
          <div className="w-fit justify-start sm:justify-start flex">
            <Image
              src="/me.jpeg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Ilija Dimitrijevic</h1>
              <p className="text-font-secondary">Software developer</p>
            </div>

            <div className="w-fit px-2 py-2 flex flex-col gap-2 bg-zinc-100 shadow-sm rounded-xl">
              <p className="text-sm text-zinc-800">Core Technologies:</p>
              <div className="flex gap-1 items-center">
                {[
                  TechStackIcon.JAVASCRIPT,
                  TechStackIcon.TYPESCRIPT,
                  TechStackIcon.JAVA,
                  TechStackIcon.REACT,
                  TechStackIcon.NEXTJS,
                  TechStackIcon.NODEJS,
                  TechStackIcon.MONGO,
                  TechStackIcon.MY_SQL,
                ].map((item) => (
                  <TechStackIcons key={item} icon={item} />
                ))}
              </div>
            </div>
          </div>
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

        <div className="hidden sm:flex w-full flex-col gap-2 ">
          <Github />
          <GeeksForGeeks />
        </div>
      </div>

      <div className="col-span-2 p-4  px-12">
        <Projects />
      </div>

      <div className="sm:hidden px-12 w-full flex flex-col gap-4 ">
        <Separator className="text-red-600" />

        <Github />
        <GeeksForGeeks />
      </div>
    </div>
  );
}
