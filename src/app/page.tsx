import Header from "../components/Header";
import Searchbox from "@/components/Searchbox";
import { Bell } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col grow md:px-12 lg:px-24">
        <div className="py-6 px-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="static/images/avatar.png" alt="avatar" />
              <div>
                <div className="font-bold">Hello, Welcome!</div>
                <div className="underline">Create an account</div>
              </div>
            </div>
            <div className="rounded-full bg-[#0084b4] p-3 mr-4">
              <Bell className="w-8 h-8 ml-auto text-white" />
            </div>
          </div>

          <Searchbox />
        </div>

        <div className="px-4 py-6 grid grid-flow-row grid-rows-9 gap-4 bg-white rounded-t-[40px]">
          <div className="row-span-3 p-4 bg-[#00B2F3] rounded-[25px] ">1</div>
          <div className="row-span-1 grid grid-cols-2 gap-4 items-center">
            <div className="p-4 bg-gray-300 rounded-[40px] col-span-1 items-center">
              2
            </div>
            <div className="p-4 bg-gray-300 rounded-[40px] col-span-1 items-center">
              2
            </div>
          </div>
          <div className="row-span-1 px-4 flex items-center text-lg font-bold">
            Recommendations
          </div>
          <div className="row-span-2 p-4 bg-[#00B2F3] rounded-[25px]">3</div>
        </div>
      </main>
    </div>
  );
}
