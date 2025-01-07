export const SectionHeading = ({ children }: { children: string }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export const SectionParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="my-4">{children}</p>;
};
