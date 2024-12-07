import { AboutType } from "@/types/types";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { FaAngleDown } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  name: string;
  values: AboutType[];
}

export default function About({ name, values }: AboutProps) {
  return (
    <div className="mb-10">
      <SectionTitle title={name} />

      <div className="px-4 py-6 border">
        <div className="text-left w-full   rounded-xl bg-white/5">
          {values &&
            values.length > 0 &&
            values.map((item: AboutType, index: number) => (
              <Disclosure
                as="div"
                className={`${
                  values.length - 1 === index
                    ? ""
                    : "border-b border-black/2 border-dashed"
                } py-4 w-full`}
                defaultOpen={index === 0}
                key={index}
              >
                <DisclosureButton className="text-left group flex w-full items-center justify-between">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className="w-full"
                  ></div>
                  <FaAngleDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="w-full "
                  ></div>
                </DisclosurePanel>
              </Disclosure>
            ))}
        </div>
      </div>
    </div>
  );
}
