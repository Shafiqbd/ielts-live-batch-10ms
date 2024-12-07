import { FeaturesType } from "@/types/types";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface props {
  name: string;
  values: FeaturesType[];
}

export default function Features({ name, values }: props) {
  return (
    <div>
      <SectionTitle title={name} />
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {values &&
          values.length > 0 &&
          values.map((item, index) => (
            <div className="flex flex-row items-start gap-3 m-1">
              <div className="mb-4 mx-auto transition-opacity duration-300 ease-in-out">
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={40}
                  width={40}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {item.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {item.subtitle}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
