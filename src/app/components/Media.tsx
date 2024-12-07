"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { MediaType } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface props {
  media: MediaType[];
}
export default function Media({ media }: props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

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
                <iframe
                  className="w-full md:h-[220px] h-[220px]"
                  src={`https://www.youtube.com/embed/${item.resource_value}`}
                  title={item.name}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide className="h-[220px]" key={index}>
                <Image
                  src={item.resource_value}
                  alt={item.name}
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
    </>
  );
}
