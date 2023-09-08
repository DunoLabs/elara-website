import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutCTASection: React.FunctionComponent = () => {
  return (
    <section className="about-cta-section">
      <ViewContainer>
        <div className="about-cta-content-container rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-700 to-neutral-900 flex flex-row items-stretch justify-between">
          <div className="about-content-section px-10 pt-10 pb-16">
            <h1 className="about-headline text-6xl font-semibold text-white leading-[68px]">
              Your Trusted <br />
              for Source <br />
              Home Security <br />
              and Style
            </h1>
            <div className="about-description text-neutral-400 w-[340px] mt-6">
              <p>
                Discover a world of premium locks and home fittings tailored to your needs.
              </p>
              <p className="mt-3">
                Our commitment to excellence shines through our wide range of high-quality products.
              </p>
            </div>
            <Button
              className={cn("mt-12 text-neutral-100 bg-neutral-800 hover:bg-neutral-700 flex flex-row gap-1 hover:gap-1.5 transition-all")}
            >
              Explore Products
              <ArrowRight className="w-4 h-auto" />
            </Button>
          </div>
          <div className="action-image-container flex flex-row items-center justify-center overflow-hidden">
            <Image
              src="/media/about-lock.avif"
              alt="home image"
              width={"600"}
              height={"400"}
              className="h-[100%] transition-all"
            />
          </div>
        </div>
      </ViewContainer>
    </section>
  )
};

export default AboutCTASection;