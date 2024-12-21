"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.01, ease: "easeIn" },
        }}
      >
        <div className="relative group w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          {/* Imagem */}
          <div className="absolute inset-0 rounded-full border-0 border-transparent bg-gradient-to-b from-slate-950 to-sky-900 shadow-2xl overflow-hidden hover:border-2 hover:border-customColor transition-all duration-200">
            <Image
              src="/assets/marlon.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-cover opacity-85 shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
