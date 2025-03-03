import { SquareStack } from "lucide-react";
import { SectionHeading, SectionParagraph } from "./texts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PopularCategoriesSection = () => {
  const popular_categories = useMemo(() => {
    return [
      { title: "Health", description: "Health datasets" },
      { title: "Education", description: "Education datasets" },
      { title: "Agriculture", description: "Agriculture datasets" },
      { title: "Finance", description: "Finance datasets" },
      { title: "Transport", description: "Transport datasets" },
      { title: "Energy", description: "Energy datasets" },
      { title: "Environment", description: "Environment datasets" },
      { title: "Tourism", description: "Tourism datasets" },
      { title: "Demographics", description: "Demographics datasets" },
      { title: "Security", description: "Security datasets" },
    ];
  }, []);

  return (
    <section className="p-4">
      <div>
        <div className="flex space-x-2 items-center">
          <SquareStack />
          <SectionHeading>Popular Categories</SectionHeading>
        </div>
        <SectionParagraph>
          Explore the most popular categories of datasets on Open Data Ghana.
        </SectionParagraph>
      </div>
      <div className="max-w-[90vw] relative">
        <ScrollArea className="w-full sm:w-full">
          <div className="flex space-x-4">
            {popular_categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default PopularCategoriesSection;

const CategoryCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="min-w-[282px] max-w-[282px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
