"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { TestimonialType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SectionTitle from "./SectionTitle";

interface props {
  values: TestimonialType[];
  name: string;
}
export default function Testimonial({ values, name }: props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="mb-10">
      <SectionTitle title={name} />
      <Swiper
        spaceBetween={40}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        slidesPerView={2}
        modules={[FreeMode, Navigation, Thumbs]} // Remove Grid module
        className="swipper-main"
      >
        {values &&
          values?.length > 0 &&
          values?.map((item: TestimonialType, index: number) => (
            <SwiperSlide key={index}>
              {/* <RiDoubleQuotesL
                  size={20}
                  className="text-[#EC1F27] h-8 w-8 rounded-full z-50 font-bold bg-[#FCE0D6] 
                  p-2 absolute -top-4 left-15 overflow-visible"
                /> */}
              <div className="relative w-full border p-4 rounded z-10">
                {!isPlaying ? (
                  <>
                    <Image
                      src={item.thumb || ""}
                      alt={item.name}
                      height={500}
                      width={500}
                      className="w-full object-cover md:h-[200px] h-[200px]"
                    />
                    {/* Play Button */}
                    <button
                      onClick={handlePlay}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 bg-white hover:bg-slate-100 text-white rounded-full p-4"
                    >
                      <FaPlay size={20} className="text-[#1CAB55] " />
                    </button>
                  </>
                ) : (
                  // Video iframe
                  <iframe
                    className="md:h-[200px] h-[200px] w-full"
                    src={`https://www.youtube.com/embed/${item.video_url}`}
                    title={item.name}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
                <div className="flex flex-row items-start gap-3 pt-4">
                  <div className="mx-auto transition-opacity duration-300 ease-in-out">
                    <Image
                      src={item.profile_image}
                      alt={item.name}
                      height={100}
                      width={100}
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      {item.name}
                    </h2>
                    <p>{item.testimonial}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
