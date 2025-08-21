"use client";
import Image from "next/image";

const GeeksForGeeks = () => {
  return (
    <div
      onClick={() =>
        window.open(
          "https://www.geeksforgeeks.org/user/dimitrijevich/",
          "_blank"
        )
      }
      className="flex min-w-fit w-fit h-fit cursor-pointer hover:scale-[104%] duration-200 border border-zinc-100 rounded-3xl shadow-sm items-center justify-between p-2"
    >
      <div className="flex flex-col justify-between h-full p-4 gap-4">
        <div className="flex flex-col gap-1">
          <div className="w-10 h-10 bg-black flex rounded-lg items-center justify-center relative">
            <Image src={"/g4g.png"} fill alt="gh" className="rounded-lg" />
          </div>
          <span className="text-font-secondary text-sm">@dimitrijevich</span>
        </div>

        <button className="w-16 h-8 cursor-pointer bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-lg text-sm">
          Visit
        </button>
      </div>

      <div className="w-full h-full flex gap-2 p-2">
        <div className="col-span-1  items-center justify-center flex flex-col gap-1 mb-2">
          <Image src={"/score.png"} width={32} height={32} alt="solved" />
          <p className="text-xs text-center">Coding score</p>
          <p className="text-lg font-bold">277</p>
        </div>
        <div className="col-span-1  items-center justify-center flex flex-col gap-1 mb-2">
          <Image src={"/solved.png"} width={32} height={32} alt="solved" />
          <p className="text-xs text-font-secondary text-center">
            Problem solved
          </p>
          <p className="text-lg font-bold">105</p>
        </div>
      </div>
    </div>
  );
};

export default GeeksForGeeks;
