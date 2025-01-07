import { SectionHeading, SectionParagraph } from "./texts";

const AboutSection = () => {
  return (
    <div className="p-4">
      <Section>
        <SectionHeading>What is Open Data Ghana?</SectionHeading>
        <SectionParagraph>
          Open Data Ghana is a platform dedicated to empowering innovators,
          researchers, and businesses who are looking to use data to drive
          meaningful change and innovation in Ghana. Open Data Ghana enables
          users to explore, analyze, and leverage insights that are relevant to
          the Ghanaian context by providing easy access to high-quality
          datasets, with <strong>real</strong> Ghanaian representation.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionHeading>Why Ghanaian-Centric?</SectionHeading>
        <SectionParagraph>
          From agriculture to education, transportation to technology, having
          localized, representative data is crucial for creating solutions that
          truly address the needs of Ghanaian people and industries.
        </SectionParagraph>
      </Section>
    </div>
  );
};

export default AboutSection;

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="my-12">{children}</section>;
};
