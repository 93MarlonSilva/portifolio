import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span className="text-sky-500">Marlon Silva</span>
              </h1>
            <p className="max-w-[500px] mb-9 text-white/89">
            Text
            </p>
           
           <div className="flex flex-col xl:flex-row items-center gap-8"> 
           <Button
           varian="outtline"
           size="lg"
           className="uppercase flex items-center gap-2"
           >
              <span>Donwload CV</span>
              <FiDownload className="text-xl"/> 
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containersStyle="flex gap-6" iconStyle="w-9 h-9 border border-customColor border-2 rounded-full flex justify-center items-center text-customColor text-base hover:bg-customColor hover:text-primary hover:transition-all duration-500"/>
            </div>
           </div>
           
           </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home