import { SectionHeading, SectionParagraph } from "./texts";

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-4">
      <div className="flex flex-col justify-end">
        <SectionHeading>Join Ghana&apos;s Data Revolution</SectionHeading>
        <SectionParagraph>
          We believe that every contribution counts in building a future where
          data drives real-world solutions. At Open Data Ghana, we may be a
          small team, but we&apos;re committed to curating and reviewing the
          best datasets for our community. Together, with your help, we&apos;re
          creating a valuable resource for users.
        </SectionParagraph>
        <SectionParagraph>
          Here&apos;s a snapshot of what we&apos;ve achieved so far.
        </SectionParagraph>

        <div className="grid grid-cols-3 gap-4">
          <Stat text="Access to" data_point="Datasets" value={0} />
          <Stat text="From" data_point="Sources" value={0} />
          <Stat text="Across" data_point="Categories" value={0} />
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full bg-gray-400">
        [IMAGE PLACEHOLDER]
      </div>
    </section>
  );
};

export default StatsSection;

const Stat = ({
  text,
  data_point,
  value,
}: {
  text: string;
  data_point: string;
  value: number;
}) => {
  return (
    <div className="mx-auto text-center">
      <div className="font-geist text-primary">{text}</div>
      <div className="font-bold text-xl text-mainBrown dark:text-mainBlue">
        &gt; {value / 1000} K
      </div>
      <div className="uppercase text-gray-400">{data_point}</div>
    </div>
  );
};
