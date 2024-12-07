import { Overview } from "@/types/types";
import Image from "next/image";

export default function CourseOverview({ title, description }: Overview) {
  return (
    <div className="">
      <Image
        src="https://cdn.10minuteschool.com/images/live_icon_1712036077434.png"
        alt="live-batch-logo"
        width={100}
        height={100}
        className="mb-4"
      />
      <h1 className="text-white mb-4 text-[21px] font-semibold  md:text-4xl">
        {title}
      </h1>

      <p
        className="text-[#A3A3A3]"
        dir="ltr"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
