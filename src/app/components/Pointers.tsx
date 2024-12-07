import { PointersType } from "@/types/types";
import { IoIosCheckmark } from "react-icons/io";
import SectionTitle from "./SectionTitle";

interface props {
  name: string;
  values: PointersType[];
}
export default function Pointers({ name, values }: props) {
  return (
    <div className="mb-10">
      <SectionTitle title={name} />
      <div className="grid grid-cols-1 px-4 mb-4 border rounded-md lg:grid-cols-2">
        {values &&
          values.length > 0 &&
          values.map((item: PointersType, index: number) => (
            <div
              className="flex items-start justify-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5"
              key={index}
            >
              <IoIosCheckmark className="text-[#6691e8] w-8 h-8 -mt-1" />
              <div className="flex-1 ml-3 ">{item.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
