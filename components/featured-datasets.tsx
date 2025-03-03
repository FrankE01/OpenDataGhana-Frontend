import { Dot, Table } from "lucide-react";
import { SectionHeading, SectionParagraph } from "./texts";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const FeaturedDatasets = () => {
  const featured_datasets = useMemo(() => {
    return [
      {
        title: "Covid-19 Cases",
        description: "Covid-19 cases in Ghana",
        categories: ["Health", "COVID"],
        licence: "CC-BY",
        size: "1.2GB",
        visits: 1000,
        votes: 200,
      },
      {
        title: "Ghana Population",
        description: "Population data of Ghana",
        categories: ["Demographics"],
        licence: "CC-BY",
        size: "2.5GB",
        visits: 2000,
        votes: 300,
      },
      {
        title: "Ghana GDP",
        description: "GDP data of Ghana",
        categories: ["Economy"],
        licence: "CC-BY",
        size: "1.5GB",
        visits: 1500,
        votes: 250,
      },
      {
        title: "Ghana 2024 Elections",
        description: "Election data of Ghana",
        categories: ["Politics"],
        licence: "CC-BY",
        size: "1.8GB",
        visits: 1800,
        votes: 280,
      },
      {
        title: "Ghana Senior High School Education",
        description: "Education data of Ghana",
        categories: ["Education"],
        licence: "CC-BY",
        size: "1.6GB",
        visits: 1600,
        votes: 270,
      },
    ];
  }, []);

  return (
    <section className="p-4">
      <div>
        <div className="flex space-x-2 items-center">
          <Table />
          <SectionHeading>Featured Datasets</SectionHeading>
        </div>
        <SectionParagraph>
          Access the some of our featured datasets.
        </SectionParagraph>
      </div>
      <div className="max-w-[90vw] relative">
        <ScrollArea className="w-full sm:w-full">
          <div className="flex space-x-4">
            {featured_datasets.map((dataset, index) => (
              <DatasetCard
                key={index}
                title={dataset.title}
                description={dataset.description}
                categories={dataset.categories}
                licence={dataset.licence}
                size={dataset.size}
                visits={dataset.visits}
                votes={dataset.votes}
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FeaturedDatasets;

const DatasetCard = ({
  title,
  description,
  categories,
  licence,
  size,
  visits,
  votes,
}: {
  title: string;
  description: string;
  categories: string[];
  licence: string;
  size: string;
  visits: number;
  votes: number;
}) => {
  return (
    <Card className="min-w-[282px] max-w-[282px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-x-2">
          <div className="flex space-x-1">
            {categories.map((category, index) => (
              <Badge key={index}>{category}</Badge>
            ))}
            <Badge variant={"secondary"}>{licence}</Badge>
          </div>
          <p className="my-4 text-gray-500">Size: {size}</p>
          <div className="my-2 flex space-x-1 items-center justify-start text-sm text-gray-500">
            <p>{visits} visits</p>
            <Dot />
            <p>{votes} votes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
