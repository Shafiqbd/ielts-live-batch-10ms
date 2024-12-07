import { InstructorType } from "@/types/types";
import Image from "next/image";

interface props {
  name: string;
  values: InstructorType[];
}
export default function Instructors({ name, values }: props) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{name}</h2>
      <div className="grid grid-cols-1 px-4 mb-4 border rounded-md lg:grid-cols-2">
        {values &&
          values.length > 0 &&
          values.map((item: InstructorType, index: number) => (
            <div
              className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5"
              key={index}
            >
              <div className="mt-2 rounded-md">
                <div className="rounded-md transition-opacity duration-300 ease-in-out">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={80}
                    width={80}
                    className="rounded-md "
                  />
                </div>
              </div>
              <div className="flex-1 ml-3">
                <h3 className="text-lg">{item.name}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: item.short_description }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
