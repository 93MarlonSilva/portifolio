import Name from "@/components/Name";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between  xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <Name/>
            <span className="text-2xl flex justify-center mx-auto text-customColor xl:text-3xl">Full Stack Developer</span>
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-10">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center border-2 rounded-lg border-customColor text-customColor p-2 gap-2 hover:text-lg duration-1000"
              >
              <span >Download CV</span>
              <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containersStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-customColor border-2 rounded-full flex justify-center items-center text-customColor text-base hover:bg-customColor hover:text-primary hover:w-10 hover:h-10 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
