import About from "@/app/components/About";
import CourseOverview from "@/app/components/CourseOverview";
import DemoClass from "@/app/components/DemoClass";
import Faq from "@/app/components/Faq";
import Features from "@/app/components/Features";
import FreeItem from "@/app/components/FreeItem";
import Instructors from "@/app/components/Instructors";
import Media from "@/app/components/Media";
import Pointers from "@/app/components/Pointers";
import Routine from "@/app/components/Routine";
import Testimonial from "@/app/components/Testimonial";

export default function ProductDetails() {
  return (
    <div>
      <div className="min-h-[300px] md:min-h-[650px] overview-background">
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10  mx-auto">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_500px)]">
            <CourseOverview />
          </div>

          <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <Media />
          </div>
        </div>
      </div>

      <main className="container flex flex-col gap-4 md:flex-row md:gap-12 mx-auto ">
        <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <DemoClass />
          <Instructors />
          <Features />
          <Pointers />
          <Routine />
          <FreeItem />
          <Testimonial />
          <About />
          <Faq />
        </section>
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white">
          <Media />
        </section>
      </main>
    </div>
  );
}
