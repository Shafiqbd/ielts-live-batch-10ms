import About from "@/app/components/About";
import CourseOverview from "@/app/components/CourseOverview";
import DemoClass from "@/app/components/DemoClass";
import Faq from "@/app/components/Faq";
import Features from "@/app/components/Features";
import FreeItem from "@/app/components/FreeItem";
import Instructors from "@/app/components/Instructors";
import Pointers from "@/app/components/Pointers";
import Routine from "@/app/components/Routine";
import Sidebar from "@/app/components/Sidebar";
import Testimonial from "@/app/components/Testimonial";
import { apiService } from "@/utils/apiService";
import { delay } from "@/utils/helper";
import Loading from "./loading";

export default async function pages() {
  let data: any;

  try {
    data = await apiService("products/ielts-live-batch");
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <div className="container mx-auto py-6">
        <p className="text-center text-red-500">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }
  await delay(500);
  const { media, checklist, cta_text, start_at, sections } = data;

  return (
    <div>
      <div className=" overview-background">
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10  mx-auto">
          <div className="order-1 flex flex-col justify-center flex-1 lg:order-1  lg:max-w-[calc(100%_-_500px)]">
            {data ? <CourseOverview {...data} /> : <Loading />}
          </div>

          <div className="w-full  lg:max-w-[400px] order-2 bg-white absolute right-0 lg:top-[50px] lg:absolute p-1 border">
            {media && checklist && media.length > 0 ? (
              <Sidebar
                media={media}
                checklist={checklist}
                cta_text={cta_text}
                start_at={start_at}
              />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      <main className="container flex flex-col gap-4 lg:flex-row lg:gap-12 mx-auto px-4 md:px-0">
        <section className="order-2 flex-1 lg:order-1 lg:max-w-[calc(100%_-_448px)]">
          {sections && sections?.length > 0 ? (
            sections.map((section: any, index: number) => {
              return (
                <div key={index}>
                  {section.type === "demo_class_book_engagement" && (
                    <DemoClass {...section.values[0]} />
                  )}
                  {section.type === "features" && <Features {...section} />}

                  {section.type === "routine" && <Routine {...section} />}
                  {section.type === "instructors" && (
                    <Instructors {...section} />
                  )}

                  {section.type === "pointers" && <Pointers {...section} />}
                  {section.type === "free_items" && <FreeItem {...section} />}
                  {section.type === "testimonials" && (
                    <Testimonial {...section} />
                  )}
                  {section.type === "about" && <About {...section} />}
                  {section.type === "faq" && <Faq {...section} />}
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </section>
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white">
          {/* <Media /> */}
        </section>
      </main>
    </div>
  );
}
