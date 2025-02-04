import Title from "@/components/Title";
import React from "react";

export default function Opportunity() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Title title="Opportunities" />

      <div className="flex flex-col mx-6 items-center">
        <div className="px-10 text-center">
          Please choose a type of opportunities that you want to explore
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">
          <ItemBox title="Scholarships Abroad" img="rocket" />
          <ItemBox title="Exchange Programs" img="globe" />
          <ItemBox title="Local Scholarships" img="table" />
          <ItemBox title="Mentorship" img="walk" />
        </div>
        <div className="text-2xl font-semibold w-[300px]  text-center mt-20">
          More than 100+ opportunities available!
        </div>
      </div>
    </div>
  );
}

function ItemBox({ title, img }: { title: string; img: string }) {
  return (
    <div className="flex flex-col text-center bg-white rounded-[20px] p-4 shadow-2xl">
      <img
        src={`/static/images/${img}.png`}
        alt="pic"
        className="w-fit self-center"
      />
      <div className="font-bold text-sm">{title}</div>
      <div className="underline text-gray-600 text-xs">Click to see more</div>
    </div>
  );
}
