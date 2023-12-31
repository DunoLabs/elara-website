import ViewContainer from "@components/layouts/view-container";
import { Lock, Shapes, Wand2 } from "lucide-react";

const QualitiesData: Array<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    title: "Safety",
    description: "Uncompromising security to protect what matters most.",
    icon: <Lock />,
  },
  {
    title: "Variety",
    description: "Diverse options to match your unique style and needs.",
    icon: <Shapes />,
  },
  {
    title: "Design",
    description: "Stylish solutions that complement your home's aesthetics.",
    icon: <Wand2 />,
  },
];

const QualitiesSection: React.FunctionComponent = () => {
  return (
    <section className="qualities-section">
      <ViewContainer className="my-36">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl sm:text-6xl font-semibold leading-[68px] text-center">
            What are we known for?
          </h1>
          <p className="text-center mt-4 max-w-xl text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            pellentesque arcu, sed sit. Nunc, sed sit quisque. Nunc, sed sit
            quisque.
          </p>
        </div>

        <div className="qualities-list-container grid grid-cols-1 md:grid-cols-3 items-start my-24 gap-24 w-fit mx-auto">
          {QualitiesData.map((quality, qualityIndex) => (
            <div
              className="quality-container flex flex-col gap-3 items-center"
              key={qualityIndex}
            >
              <div className="p-3 rounded-full bg-neutral-200 w-fit h-fit">
                {quality.icon}
              </div>
              <h3 className="leading-snug text-2xl font-semibold">
                {quality.title}
              </h3>
              <p className="font-normal text-lg text-neutral-500 w-56 text-center">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default QualitiesSection;
