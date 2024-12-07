interface props {
  title: string;
}
export default function SectionTitle({ title }: props) {
  return (
    <div className="text-xl font-semibold leading-[30px] text-black mb-4">
      {title}
    </div>
  );
}
