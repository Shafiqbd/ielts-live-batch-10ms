import { RoutineType } from "@/types/types";
import SectionTitle from "./SectionTitle";

interface props {
  name: string;
  values: RoutineType[];
}
export default function Routine({ name, values }: props) {
  return (
    <div className="mb-10">
      <SectionTitle title={name} download_link={values[0].download_link} />
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: values[0].html }}
      ></div>
    </div>
  );
}
