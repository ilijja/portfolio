"use client";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

const Matrix = () => {
  const rows = 7;
  const cols = 8;
  const [matrix, setMatrix] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const tempMatrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        if (j === cols - 1 && i > rows - 5) continue;
        const isGreen = Math.random() < 4 / 7;
        row.push(
          <div
            key={j}
            className={`w-[10px] h-[10px] sm:w-[8px] sm:h-[8px] lg:w-[14px] lg:h-[14px] rounded border border-zinc-100 m-[3px] flex items-center justify-center text-xs ${
              isGreen ? "bg-green-300" : "bg-zinc-100"
            }`}
          ></div>
        );
      }
      tempMatrix.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    setMatrix(tempMatrix);
  }, []);

  return <div className="p-4">{matrix}</div>;
};

const Github = () => {
  return (
    <div
      onClick={() => window.open("https://github.com/ilijja", "_blank")}
      className="flex w-fit min-w-fit h-fit border border-zinc-100 hover:scale-[104%] cursor-pointer duration-200 rounded-3xl shadow-sm items-center justify-between p-2"
    >
      <div className="flex flex-col justify-between min-h-[120px] px-4">
        {" "}
        {/* Changed height handling */}
        <div className="flex flex-col gap-1">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Image src={"/github.png"} width={28} height={28} alt="gh" />
          </div>
          <span className="text-font-secondary text-sm">@ilijja</span>
        </div>
        <button className="w-16 h-8 cursor-pointer bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-lg text-sm mt-auto">
          {" "}
          {/* Added mt-auto */}
          Visit
        </button>
      </div>
      <Matrix />
    </div>
  );
};

export default Github;
