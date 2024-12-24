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
          transition: { delay: 2, duration: 0.01, ease: "easeInOut" },
        }}
      >
        <div className="group w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute">
          {/* Imagem */}
          <div className="absolute inset-0 rounded-full border-0 border-transparent bg-gradient-to-b from-slate-950 to-sky-900 shadow-2xl overflow-hidden hover:border-2 hover:border-customColor transition-all duration-200">
            <Image
              src="/assets/marlon.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-cover opacity-90 shadow-2xl"
            />
          </div>
        </div>
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="50 50 414 400"
        xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke= "var(--custom-color)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 368],
            }}  
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
