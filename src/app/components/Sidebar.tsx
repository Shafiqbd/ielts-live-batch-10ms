import { Checklist, MediaType } from "@/types/types";
import CheckList from "./CheckList";
import Media from "./Media";

interface props {
  media: MediaType[];
  checklist: Checklist[];
  cta_text: {
    name: string;
    value: string;
  };
  start_at: Date;
}

export default function Sidebar({
  media,
  checklist,
  cta_text,
  start_at,
}: props) {
  return (
    <div>
      <Media media={media} cta_text={cta_text.name} start_at={start_at} />
      <CheckList checklist={checklist} />
    </div>
  );
}
