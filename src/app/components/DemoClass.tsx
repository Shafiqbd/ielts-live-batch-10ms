import Image from "next/image";
import Button from "./Button";

interface props {
  background: {
    image: string;
  };
  cta: {
    clicked_url: string;
    text: string;
  };
  description: string;
  description_color: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}
export default function DemoClass({
  background,
  cta,
  description,
  description_color,
  thumbnail,
  title,
  title_color,
  top_left_icon_img,
}: props) {
  console.log("background", background);
  return (
    <div
      style={{
        backgroundImage: `url(${background.image})`,
        minHeight: "300px",
      }}
      className="mb-8 rounded-xl p-8 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:pt-0">
        <div>
          <Image src={top_left_icon_img} alt={title} height={150} width={150} />
          <h2
            className="text-lg font-semibold text-white py-4"
            style={{ color: title_color }}
          >
            সেরা ইন্সট্রাক্টরদের এক্সক্লুসিভ IELTS লাইভ ওয়েবিনার
          </h2>
          <p className="pb-4" style={{ color: description_color }}>
            {description}
          </p>

          <Button type="button">{cta.text}</Button>
        </div>
        <div className="hidden md:block">
          <Image
            src={thumbnail}
            alt={title}
            height={300}
            width={300}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
