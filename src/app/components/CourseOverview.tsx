import { Overview } from "@/types/types";
import Image from "next/image";
import Countdown from "./Countdown";

export default function CourseOverview({
  title,
  description,
  start_at,
}: Overview) {
  return (
    <div className="p-4 xl:p-0">
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

      <div
        className="text-[#A3A3A3]"
        dir="ltr"
        dangerouslySetInnerHTML={{
          __html: description || "No description available.",
        }}
      />
      <Countdown start_at={start_at} />
    </div>
  );
}
