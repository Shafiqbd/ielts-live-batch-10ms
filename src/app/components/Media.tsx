"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { MediaType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Button from "./Button";

interface props {
  media: MediaType[];
  cta_text: string;
  start_at: Date;
}
export default function Media({ media, cta_text }: props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const handleBuy = (e: any) => {
    e.preventDefault();
    console.log("buy course action");
  };

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swipper-main"
      >
        {media &&
          media?.length > 0 &&
          media?.map((item: MediaType, index: number) =>
            item.resource_type === "video" ? (
              <SwiperSlide key={index}>
                <div className="relative w-full md:h-[220px] h-[220px]">
                  {!isPlaying ? (
                    <>
                      {/* Thumbnail */}
                      <Image
                        src={item.thumbnail_url || ""}
                        alt={item.name}
                        height={500}
                        width={500}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button */}
                      <button
                        onClick={handlePlay}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 bg-white hover:bg-slate-100 text-white rounded-full p-4"
                      >
                        <FaPlay size={20} className="text-[#1CAB55]" />
                      </button>
                    </>
                  ) : (
                    // Video iframe
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                      title={item.name}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  )}
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide className="h-[220px]" key={index}>
                <Image
                  src={item.resource_value}
                  alt={item.name}
                  height={500}
                  width={500}
                  className="w-full h-[220px]"
                />
              </SwiperSlide>
            )
          )}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swipper-thumbs"
      >
        {media &&
          media?.length > 0 &&
          media?.map((item: MediaType, index: number) => (
            <SwiperSlide key={index}>
              <Image
                height={300}
                width={300}
                src={
                  item.resource_type === "video"
                    ? item.thumbnail_url || ""
                    : item.resource_value || ""
                }
                alt={item.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="px-4">
        <p className="text-xs font-normal text-gray-500 md:text-base mt-6">
          ব্যাচ ১০: ৬ জানুয়ারি, ২০২৫ - মার্চ ১৯, ২০২৫
        </p>

        <div className="my-6">
          <Button
            className="w-full shadow-md"
            type="button"
            onClick={handleBuy}
          >
            {cta_text}
          </Button>
        </div>

        <p className=" md:block text-base text-[#F3764E] ">
          ১০ম ব্যাচের ভর্তি শেষ হবে:৬ জানুয়ারী, ২০২৫
        </p>
      </div>
    </>
  );
}
