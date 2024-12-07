import { GrDocumentDownload } from "react-icons/gr";

interface props {
  title: string;
  download_link?: string;
}
export default function SectionTitle({ title, download_link }: props) {
  return (
    <div className={` mb-4 ${download_link ? "flex justify-between" : ""}`}>
      <h2 className="text-xl font-semibold leading-[30px] text-black">
        {title}
      </h2>

      {download_link && (
        <div className="flex items-center gap-2 mt-2">
          <GrDocumentDownload size={18} className="text-[#1CAB55]" />
          <a
            href={download_link}
            target="_blank"
            className=" text-[#1CAB55] text-sm font-medium underline cursor-pointer text-green md:text-base"
          >
            ডাউনলোড রুটিন
          </a>
        </div>
      )}
    </div>
  );
}
