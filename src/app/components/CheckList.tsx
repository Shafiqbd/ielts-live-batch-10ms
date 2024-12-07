import { Checklist } from "@/types/types";
import Image from "next/image";
interface props {
  checklist: Checklist[];
}

export default function CheckList({ checklist }: props) {
  return (
    <div className="hidden md:block mt-8 px-4">
      <div className="grid py-2 ">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
      </div>

      {checklist &&
        checklist.length > 0 &&
        checklist.map((item: Checklist, index: number) => (
          <div className="flex items-center mb-3 leading-5" key={index}>
            <div className="inline-block h-[20px] w-[20px]  transition-opacity duration-300 ease-in-out">
              <Image src={item.icon} alt={item.text} width={200} height={200} />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {item.text}
            </h4>
          </div>
        ))}
    </div>
  );
}
